import {useState, useEffect} from 'react';
import Image from "next/image";
import {useRouter} from 'next/router';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJsSquare,
  faHtml5,
  faCss3,
  faNodeJs,
  faReact,
  faPython,
  faVuejs,
  faAngular,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import AppInput from './AppInput';
import AppTextArea from './AppTextArea';
import AddProject from './AddProject';
import { api } from '../services/api';



export default function AppForm({profile, profileExists = true}) {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    image: profile.image,
    jobTitle: profile.jobTitle,
    email: profile.email,
    telephone: profile.telephone,
    aboutMe: profile.aboutMe,
    pastExperiences: profile.pastExperiences,
  })
  const [badges, setBadges] = useState(profile.badges)
  const [projects, setProjects] = useState(profile.projects)
  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    photo: "",
    link: "",
  })

  const postData = async (form) => {
    try {
      const response = await api.post('api/users/profile/new', form);
      if(response.status !== 200) {
        console.log(response.status, response.statusText);
      } else {
        router.push('/dashboard/view');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const addProject = () => {
    alert('add project');
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    profileExists ? putData(form) : postData(form);
  }


  return (
    <section className="mt-5 ">
      <form onSubmit={handleSubmit} className="max-w-screen">
        <div className="flex flex-col lg:justify-center lg:flex-row lg:pt-10 p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5 ">
          <div className="flex flex-col lg:w-1/2 ">
            <div className=" md:w-full md:mx-0">
              <div className="flex items-center space-x-4 justify-center">
                {form.image ? ( <Image
                  alt="profil"
                  src={form.image}
                  width={100}
                  height={100}
                  className="mx-auto object-cover rounded-full"
                />) : (<Image
                  alt="profil"
                  src={"/images/personIcon.png"}
                  width={100}
                  height={100}
                  onClick={() => {alert("//TODO")}}
                  className="mx-auto object-cover rounded-full"
                />)}
                <div className="flex flex-col">
                 <AppInput name='jobTitle' value={form.jobTitle} onChange={handleChange} placeholder='Position: Frontend Dev'  />
                </div>
              </div>
            </div>
            <div className="flex flex-col  space-y-4 text-gray-500 lg:mt-10">
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="w-1/3">First Name</h2>
                <div className="w-2/3">
                    <AppInput required name='firstName' value={form.firstName} onChange={handleChange} placeholder='First Name'           />
                </div>
              </div>
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="w-1/3">Last Name/s</h2>
                <div className="w-2/3">
                    <AppInput required name='lastName' value={form.lastName} onChange={handleChange} placeholder='Last Name' />
                </div>
              </div>
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="w-1/3">Email</h2>
                <div className="w-2/3">
                    <AppInput name='email' value={form.email} onChange={handleChange} placeholder='Email' />
                </div>
              </div>
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="w-1/3">Telephone</h2>
                <div className="w-2/3">
                    <AppInput name='telephone' value={form.telephone} onChange={handleChange} placeholder='Telephone' />
                </div>
              </div>
              <h2 className="font-bold text-2xl p-2 my-5 flex flex-col flex-1 justify-center items-center">
                Badges
              </h2>
              <div className="my-5 grid gap-4 place-items-center grid-flow-row grid-cols-4 text-3xl lg:text-6xl">
                {badges.map((badge, index) => {
                  return (
                      <FontAwesomeIcon key={index} icon={badge.name} className={badge.isActive ? "badge-true" : "badge-false"} />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />

        
        {profileExists ? (
          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-gray-600 font-bold mb-5 self-center text-2xl">
              Your Pride and Joy - ./Projects
            </h1>
            {projects.map((project, index) => {
              <AddProject key={index} project={project} />
            })}
            {projects.length < 3 ? (<AddProject />) : (<p>cuzinho</p>)}
          </div>
        ) : (<div className="flex flex-col lg:w-1/2"><h1 className="text-gray-600 font-bold mb-5 self-center text-2xl">
        Save your profile to add projects
      </h1></div>)}
        </div>

        <div className="space-y-6 bg-white border-b-2 border-indigo-400 rounded-lg">
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 font-semibold lg:text-xl lg:w-1/5">About</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3 lg:w-4/5 lg:max-w-7xl">
              <AppTextArea name='aboutMe' value={form.aboutMe} onChange={handleChange} placeholder='Write a short summary about you!'  />
            </div>
          </div>
          <hr />
          <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="max-w-sm mx-auto md:w-1/3 font-semibold lg:text-xl lg:w-1/5">Past Experiences</h2>
            <div className="max-w-sm mx-auto space-y-5 md:w-2/3 lg:w-4/5 lg:max-w-7xl">
              <AppTextArea name='pastExperiences' value={form.pastExperiences} onChange={handleChange} placeholder='Write about your journey so far!'  />
            </div>
          </div>
          <hr />
          <div className="w-full px-4 pb-4 mx-auto text-gray-500 md:w-1/2 ">
            <button
              type="submit"
              className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
