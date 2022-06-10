import {parseCookies} from 'nookies';
import jwt from 'jsonwebtoken';
import { useState } from "react";
import {useRouter} from 'next/router';
import Image from 'next/image';
import Head from 'next/head';

import AppInputWithIcon from "../components/AppInputWithIcon";
import Button from "../components/Button";
import { faAt, faLock} from '@fortawesome/free-solid-svg-icons';
import CheckBox from "../components/CheckBox";

export default function RegisterCompany() {
  const router =  useRouter()
  const [coach, setCoach] = useState(false);
  const [company, setCompany] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: '',
  })
  
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form, coach, company);
    if(coach === false && company === false){
      setMessage('You must select at least one role: Coach or Company');
      return;
    }
    try {
      const response = await fetch('/api/coaches/managePersonnel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({form, coach, company})
      })
      if(!response.ok) {
        const data = await response.json()
        setMessage(data.message);
      }
      else {
      router.push('/profiles/gallery');
      }
    } catch (error) {
      setMessage(error);
      console.log(error.body);
    }
  }

  const handleStudent = (event) => {
    setCoach(!coach);
  }
  const handleCompany = (event) => {
    setCompany(!company);
  }

  return (
    <div>
      <Head>
        <title>Manage Personnel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="h-screen flex">
        <div className="hidden lg:flex w-full lg:w-1/2 
          bg-beCodeLight bg-auto bg-no-repeat bg-right
            justify-around items-center">
          <div className="w-1/2 mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">BeVisible</h1>
            <h2 className="text-white mt-1">Flood the market with your talent.</h2>
            {/* <div className="flex justify-center lg:justify-start mt-6">
              <a href="#" className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Get Started</a>
            </div> */}
          </div>
          <div className="w-1/2">
            <Image 
            width={470} 
            height={470} 
            alt='logo of the company' 
            src="/images/logo-becode.png"
            layout="responsive"
            />
          </div>
          
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form onSubmit={handleSubmit}  className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome Coach!</h1>
              <p className="text-sm font-normal text-gray-600 mb-8">Here you can add new coaches or companies.</p>
              <p className="font-bold self-center text-red-500">{message}</p>
              <AppInputWithIcon 
                required 
                icon={faAt} 
                type='email' 
                name='email' 
                value={form.email} 
                onChange={handleChange} 
                placeholder='Email Address' />
              <p>{form.email}</p>
              <AppInputWithIcon 
                required 
                // pattern='[0-9]' 
                minLength={6} 
                icon={faLock} 
                type='password' 
                name='password' 
                value={form.password} 
                title='Password should be digits (0-9) with minimum 6 characters'
                onChange={handleChange} 
                placeholder='Set a password' />
              <p>{form.password}</p>
              <AppInputWithIcon 
                required 
                // pattern='[0-9]' 
                minLength={6} 
                icon={faLock} 
                type='password' 
                name='password2' 
                value={form.password2} 
                title='Password should be digits (0-9) with minimum 6 characters'
                onChange={handleChange} 
                placeholder='Repeat it' />
              <p>{form.password2}</p>
              <div className="flex flex-row justify-evenly">
                <CheckBox name='Coach' value={coach} onChange={handleStudent} />
                <CheckBox name='Company' value={company} onChange={handleCompany} />
              </div>
              <Button color="primary" name='Register' type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  let {visibleBackend: token} = parseCookies(context);

  if(!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const {permissions} = jwt.verify(token, process.env.KEY);

  if(permissions !== 'coach') {
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