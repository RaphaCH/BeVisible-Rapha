import dbConnect from "../../lib/dbConnect";
import Profile from '../../models/profile';
import Project from '../../models/projects';

import CVDisplay from '../../components/CVDisplay';

export default function LearnerCV({ profile }) {
  
  return (
    <div>
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

  
  }

  return {
    props: {profile: singleProfile},
  }
}