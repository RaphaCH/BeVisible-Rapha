import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import Lottie from 'lottie-react';
import Link from 'next/link';

import emptyBox from '../../public/svg/emptyBox.json';
import dbConnect from '../../lib/dbConnect'
import Profile from '../../models/profile';

import SideBar from "../../components/SideBar";
import AppForm from "../../components/AppForm";
import CVDisplay from "../../components/CVDisplay";
import { getApiClient } from '../../services/axios';



export default function DashboardView({profile}) {

  if(profile === null) {
    return (
      <section className="">
        <SideBar />
        <Lottie className='mx-auto w-1/3' loop animationData={emptyBox} />
        <Link href='/dashboard/edit'>
          <h2 className='text-lg md:text-xl font-medium text-center'>Hmmm, this is looking real empty. <span className='underline text-blue-500'>Let{"'"}s create your profile!</span></h2>
        </Link>
      </section>
    )
  }

  return (
      <section className="">
        <SideBar />
        <CVDisplay />
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
  console.log(id);
  console.log(permissions);

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
    props: {}
  }




}