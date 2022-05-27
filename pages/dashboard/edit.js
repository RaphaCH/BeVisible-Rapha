import {parseCookies} from 'nookies'
import jwt from 'jsonwebtoken'


import dbConnect from '../../lib/dbConnect';
import Profile from '../../models/profile';
import SideBar from "../../components/SideBar";
import AppForm from "../../components/AppForm";



export default function DashboardEdit({profile}) {
  const newProfile = {
    firstName: '',
    lastName: '',
    image: '',
    jobTitle: '',
    email: '',
    telephone: '',
    projects: [],
    aboutMe: '',
    pastExperiences: '',
    badges: [],
  }

  if(profile === null) {
    return (
      <section className="">
        <SideBar />
        <AppForm profile={newProfile} profileExists={false}/>
      </section>
    )
  }

  return (
    <section className="">
      <SideBar />
      <AppForm profile={profile} projects={profile.projects}/>
    </section>
)


}

export async function getServerSideProps(context) {
  const {visibleBackend: token} = parseCookies(context);

  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const {id, permissions} = jwt.verify(token, process.env.KEY);

  if(permissions !== 'learner') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  await dbConnect()
  const userProfile = await Profile.findOne({user: id}).populate('projects').lean()
  if(userProfile) {
    userProfile._id = userProfile._id.toString();
    userProfile.user = userProfile.user.toString();
    userProfile.badges = userProfile.badges.map(badge => {
      return {
        id: badge._id.toString(),
        name: badge.name,
        isActive: badge.isActive,
      }
    });
    userProfile.projects = userProfile.projects.map(project => {
      return {
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        photo: project.photo ? project.photo : '',
        link: project.link,
      }
    });
  }

  if(userProfile === null) {
    return {
      props: {profile: null}
    }
  }

  return {
    props: {profile: userProfile}
  }

}