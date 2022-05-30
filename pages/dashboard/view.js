import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import Lottie from 'lottie-react';
import Link from 'next/link';

import emptyBox from '../../public/svg/emptyBox.json';

import dbConnect from '../../lib/dbConnect';
import Profile from '../../models/profile';
import Project from '../../models/projects';

import SideBar from "../../components/SideBar";
import CVDisplay from "../../components/CVDisplay";



export default function DashboardView({profile}) {
  if(profile === null) {
    return (
      <section className="">
        <Lottie className='mx-auto lg:w-1/3' loop animationData={emptyBox} />
        <Link href='/dashboard/edit'>
          <h2 className='mt-5 text-lg md:text-xl xl:text-2xl font-medium text-center'>Hmmm, this is looking real empty. <span className='underline text-blue-500'>Let{"'"}s create your profile!</span></h2>
        </Link>
      </section>
    )
  }

  return (
      <section className="">
        <SideBar />
        <CVDisplay 
        firstName={profile.firstName} 
        lastName={profile.lastName} 
        image={profile.image || ''}
        position={profile.jobTitle}
        email={profile.email}
        telephone={profile.telephone}
        city={profile.city}
        projects={profile.projects}
        about={profile.aboutMe} 
        history={profile.pastExperiences}
        badges={profile.badges}
        key={profile._id} 
        />
      </section>
  )
}


export async function getServerSideProps(context) {
  // const serverAPI = getApiClient(context);
  let {visibleBackend: token} = parseCookies(context);
  // const grabCookie = getCookie('visibleBackend');

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
  const userProfile = await Profile.findOne({user: id}).populate({path: 'projects', model: Project}).lean();
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
    if(userProfile.projects.length > 0) {
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