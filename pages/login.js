import { useState, useContext } from "react";
import Link from "next/link";
import Image from 'next/image';

import {AuthContext} from '../contexts/AuthContext';
import AppInput from "../components/AppInput";
import Button from "../components/Button";
import { faAt, faLock } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
  const {signIn} = useContext(AuthContext)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleSignIn = async(form) => {
    await signIn(form);
  }

  const handleChange = (event) => {
    const target = event.target;

    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  return (
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
          <form className="bg-white rounded-md shadow-2xl p-5">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
            <p className="text-sm font-normal text-gray-600 mb-8">Welcome Back</p>
            <div className="mb-1 py-2 px-3">
              <AppInput icon={faAt} name='email' value={form.email} onChange={handleChange} placeholder='Email Address' />
            </div>
            <div className="mb-1 py-2 px-3">
              <AppInput icon={faLock} name='password' value={form.password} onChange={handleChange} placeholder='*****' />
            </div>
            <Button handleSubmit={handleSignIn} name='Login' type="submit" />
            <div className="flex justify-between mt-4">
              <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer 
              hover:underline hover:decoration-solid hover:text-base duration-100 transition-all">Forgot Password ?</span>
              <Link href='/users/signup'>
                <a className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:underline hover:decoration-solid hover:text-base duration-100 transition-all">Don{"'"}t have an account yet?</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}