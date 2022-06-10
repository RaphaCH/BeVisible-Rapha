import dbConnect from "../../lib/dbConnect";
import Profile from '../../models/profile';
import Project from '../../models/projects';
import {parseCookies} from 'nookies'
import jwt from 'jsonwebtoken';
import {useRouter} from 'next/router';

import { AuthContext } from "../../contexts/AuthContext";
import CVCheck from '../../components/CVCheck';
import { useContext, useEffect } from "react";

export default function LearnerCV({ profile }) {
  const router = useRouter();
  const {user} = useContext(AuthContext)
  console.log(user)

  useEffect(() => {
    checkPermissions()

  }, [user])

  const checkPermissions = () => {
    if(!user || user.permissions === 'learner') {
      router.push('/');
    }
  }
  
  if(user) {
    if(user.permissions === 'company') {
      profile.badges = profile.badges.filter(badge => badge.isActive === true)
    }
  }
  
  return (
    <div>
      <CVCheck
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
        profileId={profile._id}
        />
    </div>
  )
}


export async function getStaticPaths() {
  await dbConnect();
  const profiles = await Profile.find({});
  const paths = profiles.map(profile => {
    return {
      params: {
        id: profile._id.toString()
      }
    }
  });

  return {
    paths,
    fallback: false
  }
  
}

export async function getStaticProps({params}) {
  const profileId = params.id

  // let { visibleBackend: token } = parseCookies(context);

  //   if(!token) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     }
  //   }
  // }

  // const {permissions} = jwt.verify(token, process.env.KEY);
  
  // if(permissions === 'learner') {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     }
  //   }
  // }


  await dbConnect();
  const singleProfile = await Profile.findById(profileId).populate({path: 'projects', model: Project}).lean();
  if (singleProfile) {
    singleProfile._id = singleProfile._id.toString();
    singleProfile.user = singleProfile.user.toString();
    singleProfile.projects = singleProfile.projects.map(project => {
      return {
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        photo: project.photo ? project.photo : '',
        link: project.link
      }
    })
    singleProfile.badges = singleProfile.badges.map(badge => {
      return {
        id: badge._id.toString(),
        name: badge.name,
        isActive: badge.isActive
      }
    })
    // if(permissions === 'company') {
    //   singleProfile.badges = singleProfile.badges.filter(badge => badge.isActive)
    // }

  
  }

  return {
    props: {profile: singleProfile},
  }
}