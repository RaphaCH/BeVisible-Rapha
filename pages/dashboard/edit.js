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
        <AppForm profile={newProfile} newProfile={true}/>
      </section>
    )
  }

  return (
    <section className="">
      <SideBar />
      <AppForm profile={profile}/>
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
  const userProfile = await Profile.findOne({user: id});
  if(userProfile === null) {
    return {
      props: {profile: null}
    }
  }

  return {
    props: {userProfile}
  }

}