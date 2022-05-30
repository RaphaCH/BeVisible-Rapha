import dbConnect from "../../lib/dbConnect";
import Profile from '../../models/profile';
import Project from '../../models/projects';
import {useRouter} from 'next/router';
import { parseCookies } from 'nookies';

import Card from "../../components/Card";
import SearchBarWithFilter from "../../components/NavBars/SearchBarWithFilter";
import { useEffect, useState } from "react";


export default function Gallery({ learnerProfiles }) {
    const router = useRouter();
    //all learners satisfying filter
    const [filteredList, setFilteredList] = useState(learnerProfiles);
    //filter by badge
    const [selectedBadge, setSelectedBadge] = useState('');
    //filter by name
    const [selectedName, setSelectedName] = useState('');

    const filterByBadge = (filteredData) => {
        const metCriteria = []
        //avoid filtering for empty values
        if(!selectedBadge) {
            return filteredData
        }
        const toBeFiltered = filteredData.forEach(learner => {
            const knowsThat = learner.badges.filter(badge => badge.name === selectedBadge && badge.isActive === true);
            if(knowsThat.length >0) {
                metCriteria.push(learner)
            }
        })
        return metCriteria;
    }

    const filterByName = (filteredData) => {
        if(!selectedName) {
            return filteredData
        }
        const nameToFilter = filteredList.filter(learner => learner.firstName.toLowerCase().includes(selectedName.toLowerCase()) || learner.lastName.toLowerCase().includes(selectedName.toLowerCase()));
        return nameToFilter
    }

    const handleBadgeChange = event => {
        setSelectedBadge(event.target.value);
    }

    const handleNameChange = event => {
        setSelectedName(event.target.value);
    }

    useEffect(() => {
        var filteredData = filterByBadge(learnerProfiles);
        filteredData = filterByName(filteredData);
        setFilteredList(filteredData);
    }, [selectedBadge, selectedName]);

    const handleNavigation = (e, learnerId) => {
        e.preventDefault();
        router.push({pathname: `/profiles/${learnerId}`, query: {learnerId: learnerId}});
    }


    const mappedLearners = filteredList.map(learner => {
        return <div className="mx-5 hover:cursor-pointer" key={learner._id} onClick={e => handleNavigation(e, learner._id)}>
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
        <div className="bg-beCodeLight">
            <SearchBarWithFilter onSelectChange={handleBadgeChange} onInputChange={handleNameChange} inputValue={selectedName} />
            <section className="flex flex-row justify-center flex-wrap">
                {mappedLearners}
            </section>
        </div>
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