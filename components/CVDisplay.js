import Image from "next/image";

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

export default function CVDisplay({firstName = 'Terrence', lastName = 'Castagna Haasper', position = 'Web Dev', email = 'ribamar@ig.com.br', projectName = 'test 1', projectDescription = 'Blablabla', about = 'About me', history = 'My history'}) {
  return (
    <section className="mt-5 ">
      <form className="max-w-screen">
        <div className="flex flex-col lg:justify-center lg:flex-row lg:pt-10 p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5 ">
          <div className="flex flex-col lg:w-1/2 ">
            <div className=" md:w-full md:mx-0">
              <div className="flex items-center space-x-4 justify-center">
                <Image
                  alt="profil"
                  src={"https://github.com/RaphaCH.png"}
                  width={100}
                  height={100}
                  className="mx-auto object-cover rounded-full"
                />
                <div className="flex flex-col">
                  <p
                    type="text"
                    id="user-info-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Dev Focus"
                  >{position}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col  space-y-4 text-gray-500 lg:mt-10">
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="">{firstName} {lastName}</h2>
              </div>
              
              <div className="flex flex-row p-2 my-5 w-full items-center justify-evenly">
                <h2 className="">{email}</h2>
              </div>
              <h2 className="font-bold text-2xl p-2 my-5 flex flex-col flex-1 justify-center items-center">
                Badges
              </h2>
              <div className="my-5 grid gap-4 justify-center content-center grid-flow-row grid-cols-4 text-3xl lg:text-6xl">
                <FontAwesomeIcon
                  icon={faJsSquare}
                  className="text-vegasGold mx-2 my-3 animate-pulse"
                />
                <FontAwesomeIcon
                  icon={faPython}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faCss3}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faVuejs}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faAngular}
                  className="text-gray-300 mx-2 my-3"
                />
                <FontAwesomeIcon
                  icon={faFigma}
                  className="text-gray-300 mx-2 my-3"
                />
              </div>
            </div>
          </div>

          <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />

          <div className="flex flex-col lg:w-1/2">
            <h1 className="text-gray-600 font-bold mb-5 self-center text-2xl">
              The Pride and Joy - ./Projects
            </h1>
            <div className="my-5">
              <p
                type="text"
                id="user-info-email"
                className=" rounded-lg border-transparent flex-1 appearance-none  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Project name"
              >{projectName}</p>
              <div className="h-5"></div>
              <p
                type="text"
                id="user-info-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="White a short description of this project!"
              >{projectDescription}</p>
            </div>
            <div className="border-[1.5px] border-solid  border-gray-300 m-10 "></div>
            <div className="my-5">
              <input
                type="text"
                id="user-info-email"
                className=" rounded-lg border-transparent flex-1 appearance-none  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Project name"
              />
              <div className="h-5"></div>
              <textarea
                type="text"
                id="user-info-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="White a short description of this project!"
              ></textarea>
            </div>
            <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
            <div className="my-5">
              <input
                type="text"
                id="user-info-email"
                className=" rounded-lg border-transparent flex-1 appearance-none  border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Project name"
              />
              <div className="h-5"></div>
              <textarea
                type="text"
                id="user-info-name"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="White a short description of this project!"
              ></textarea>
            </div>
            <div className="border-[1.5px] border-solid  border-gray-300 m-10 " />
          </div>
        </div>

        <div className="space-y-6 bg-white border-b-2 border-indigo-400 rounded-lg">
          <hr />
          <div className="items-center flex-col w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="font-semibold lg:text-2xl my-5">
              About
            </h2>
            <div className=" space-y-5 lg:max-w-lg">
              <div>
                <div className=" relative ">
                  <p
                    type="text"
                    id="user-info-name"
                    className="flex w-fit py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent lg:text-xl "
                  >{about}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="items-center flex-col w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
            <h2 className="font-semibold lg:text-2xl my-5">
              Past Experiences
            </h2>
            <div className=" space-y-5 lg:max-w-lg">
              <div>
                <div className=" relative ">
                  <p
                    type="text"
                    id="user-info-name"
                    className="flex w-fit py-2 px-4 bg-white text-gray-700 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent lg:text-xl"
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
