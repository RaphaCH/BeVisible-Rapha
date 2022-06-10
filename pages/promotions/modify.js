import dbConnect from "../../lib/dbConnect";
import Promotion from "../../models/promotion";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import jwt from "jsonwebtoken";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AppInput from "../../components/AppInput";
import AppTextArea from "../../components/AppTextArea";
import AddProject from "../../components/AddProject";
import AddPromotion from "../../components/AddPromotion";
import UpdatePromotion from "../../components/UpdatePromotion";

export default function HandlePromotions({ promotions }) {
  const router = useRouter();
  const [promotion, setPromotion] = useState(promotions);
  const [newPromotion, setNewPromotion] = useState([
    {
      name: "",
      iteration: 0,
    },
  ]);

  // const postData = async (form) => {
  //   try {
  //     const response = await fetch('/api/users/profile/new', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(form)
  //     });
  //     if(response.status !== 200) {
  //       console.log(response.status, response.statusText);
  //     } else {
  //       router.push('/dashboard/view');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const putData = async (form) => {
  //   try {
  //     const response = await fetch('/api/users/profile/edit', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(form)
  //     });
  //     if(response.status !== 200) {
  //       console.log(response.status, response.statusText);
  //     } else {
  //       router.push('/dashboard/view');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleUpdateProject = (index, event) => {
  //   let data = [...projects];
  //   data[index][event.target.name] = event.target.value;
  //   // setUpdateProject(data);
  //   setProjects(data);
  // }

  const postPromotion = async (event) => {
    event.preventDefault();
    console.log(newProject);
    try {
      const response = await fetch('/api/users/project/handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProject)
      })
      if(response.status !== 200) {
        console.log(response.status, response.statusText);
      } else {
        router.reload(window.location.pathname);
      }
    } catch (error) {
      console.error(error);
    }
  }

  // const putProject = async (event, projectId, indexId) => {
  //   event.preventDefault();
  //   let projectToUpdate = projects[indexId];
  //   console.log(projects);
  //   try {
  //     const response = await fetch('/api/users/project/handler', {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(projectToUpdate, projectId)
  //     })
  //     if(response.status !== 200) {
  //       console.log(response.status, response.statusText);
  //     } else {
  //       router.reload(window.location.pathname);
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("yo");
    // profileExists ? putData(form) : postData(form);
  };

  const handleChange = (event) => {
    const target = event.target;
    setNewPromotion({
      ...newPromotion,
      [target.name]: target.value
    })
  }

  // const mappedProjects = projects.map((project, index) => {
  //   return <AddProject
  //     key={index}
  //     title={project.title}
  //     link={project.link}
  //     description={project.description}
  //     projectId={project.id}
  //     indexId={index}
  //     onChange={event => handleUpdateProject(index, event)}
  //     onClick={putProject}
  //   />
  // })

  return (
    <section className="mt-5 ">
      <form onSubmit={handleSubmit} className="max-w-screen">
        <div className="flex flex-col lg:justify-center lg:flex-col lg:pt-10 p-4 bg-gray-100 border-t-2 border-indigo-400 rounded-lg bg-opacity-5 ">
          <h1 className="text-gray-600 font-bold mb-5 self-center text-2xl">
            Manage promotions
          </h1>

          <div className="w-full lg:w-1/2 mx-auto">
            <AddPromotion 
            name={newPromotion.name}
            iteration={newPromotion.iteration}
            onChange={handleChange}
            />
          </div>

          <hr />

          {/* <div className="w-full lg:w-1/2 mx-auto">
            <AddPromotion 
            name={newPromotion.name}
            iteration={newPromotion.iteration}
            onChange={handleChange}
            />
          </div> */}
          
        </div>
      </form>
    </section>
  );
}

export async function getServerSideProps(context) {
  const { visibleBackend: token } = parseCookies(context);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const { id, permissions } = jwt.verify(token, process.env.KEY);

  if (permissions !== "coach") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  await dbConnect();
  const promotions = await Promotion.find({});
  // if(promotions) {
  //   promotion.map(promotion => {
  //     return {
  //       id: promotion._id.toString(),
  //       name: promotion.name,
  //       iteration: promotion.iteration,
  //     }
  //   })
  // }
  console.log(promotions);

  return {
    props: {},
  };
}
