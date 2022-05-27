import Image from "next/image";
import Link from 'next/link';

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
import ProjectCard from "./Display/ProjectCard";

export default function CVDisplay({firstName = 'Raphael', lastName = 'Castagna Haasper', image, position = 'Web Dev', email = 'ribamar@ig.com.br', telephone, projects, badges, about = 'About me', history = 'My history', test}) {
  return (
    <section className="mt-5 ">
      <form className="max-w-2xl mx-auto">
        <div className="flex flex-col lg:justify-center lg:pt-10 p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5 ">
          <div className="flex flex-col">
            <div className=" md:w-full md:mx-0">
              <div className="flex items-center space-x-4 justify-center">
                {image ? (<Image
                  alt="profil"
                  src={image}
                  width={100}
                  height={100}
                  className="mx-auto object-cover rounded-full"
                />) : (<Image
                  alt="profil"
                  src={'/images/personIcon.png'}
                  width={100}
                  height={100}
                  className="mx-auto object-cover rounded-full"
                />)}
                
                <div className="flex flex-col">
                  <h2 className="text-lg md:text-xl font-medium">{firstName} {lastName}</h2>
                  <p
                    type="text"
                    id="user-info-email"
                    className="py-2 text-gray-700 text-base md:text-lg font-medium"
                  >{position}</p>
                  <h3 className="underline text-base md:text-lg">{email}</h3>
                  <h3 className="underline text-base md:text-lg">phone: {telephone}</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col text-gray-500 mg:mt-10">
              <h2 className="font-bold text-xl md:text-2xl p-2 my-5 flex flex-col flex-1 justify-center items-center">
                Badges
              </h2>
              <div className="my-5 grid sm:gap-5 place-items-center grid-flow-col lg:grid-flow-row grid-cols-4 text-3xl lg:text-4xl">
               {badges.map((badge, index) => {
                 return (
                   <div key={badge.id}>
                     <FontAwesomeIcon  icon={badge.name} className={badge.isActive ? "badge-true" : "badge-false"} />
                   </div>
                 )
               })}
              </div>
            </div>
          </div>

          <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />

          <div className="flex flex-col">
            <h1 className="text-gray-600 font-bold mb-5 mx-auto text-xl md:text-2xl">
              The Pride and Joy - ./Projects
            </h1>
            {projects.map((project, index) => {
              return (
                  <div key={project.id}>
                    <ProjectCard
                      id={project.id}
                      title={project.title}
                      link={project.link}
                      description={project.description}
                      photo={project.photo ? project.photo : '/images/vercel.svg'}
                    />
                  </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6 bg-white border-b-2 border-indigo-400 rounded-lg">
          <hr />
          <div className="items-center flex-col w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="font-semibold md:text-xl lg:text-2xl my-5">
              About
            </h2>
            <div className=" space-y-5 lg:max-w-lg">
              <div>
                <div className=" relative ">
                  <p
                    type="text"
                    id="user-info-name"
                    className="flex w-fit py-2 px-4 text-gray-700 text-base md:text-lg lg:text-xl "
                  >{about}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center flex-col w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="font-semibold md:text-xl lg:text-2xl my-5">
              Past Experiences
            </h2>
            <div className=" space-y-5 lg:max-w-lg">
              <div>
                <div className=" relative ">
                  <p
                    type="text"
                    id="user-info-name"
                    className="flex w-fit py-2 px-4 text-gray-700 text-base md:text-lg lg:text-xl"
                  >{history}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
