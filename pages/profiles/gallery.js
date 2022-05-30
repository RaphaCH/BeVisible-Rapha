import dbConnect from "../../lib/dbConnect";
import Profile from '../../models/profile';
import Project from '../../models/projects';
import { parseCookies } from 'nookies';

import Card from "../../components/Card";
import SearchBarWithFilter from "../../components/NavBars/SearchBarWithFilter";
import { useState } from "react";


export default function Gallery({ learnerProfiles }) {
    //all learners satisfying filter
    const [filteredList, setFilteredList] = useState(learnerProfiles);
    //filter by badge
    const [selectedBadges, setSelectedBadges] = useState('');
    //filter by name
    const [selectedNames, setSelectedNames] = useState('');


    const mappedLearners = learnerProfiles.map(learner => {
        return <div className="mx-5" key={learner._id}>
            <Card 
            firstName={learner.firstName}
            lastName={learner.lastName}
            aboutMe={learner.aboutMe}
            position={learner.jobTitle}
            phone={learner.telephone}
            email={learner.email}
            badges={learner.badges}
            />
        </div>
    })

    return (
        <>
            <SearchBarWithFilter />
            <section className="flex flex-row justify-center flex-wrap">
                {mappedLearners}
            </section>
        </>
    )
}

export async function getServerSideProps(context) {
    let { visibleBackend: token } = parseCookies(context);

    if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

    await dbConnect()
    const learnerProfiles = await Profile.find().populate({ path: 'projects', model: Project }).lean();
    if (learnerProfiles) {
        learnerProfiles.forEach(learner => {
            learner._id = learner._id.toString();
            learner.user = learner.user.toString();
            learner.projects = learner.projects.map(project => {
                return {
                    id: project._id.toString(),
                    title: project.title,
                    description: project.description,
                    photo: project.photo ? project.photo : '',
                    link: project.link
                }
            })
            learner.badges = learner.badges.map(badge => {
                return {
                    id: badge._id.toString(),
                    name: badge.name,
                    isActive: badge.isActive
                }
            })
        })
    }

    return {
        props: { learnerProfiles }
    }

}