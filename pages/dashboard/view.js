import nookies, { parseCookies } from 'nookies';
// import cookie from 'cookie';
import {getCookie} from 'cookies-next';
import jwt from 'jsonwebtoken';

import dbConnect from '../../lib/dbConnect'

import SideBar from "../../components/SideBar";
import AppForm from "../../components/AppForm";
import CVDisplay from "../../components/CVDisplay";
import { getApiClient } from '../../services/axios';



export default function DashboardView({}) {
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

  



  return {
    props: {}
  }




}