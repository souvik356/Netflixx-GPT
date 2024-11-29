import React, { useRef, useState } from 'react'
import Header from './Header'
import { chechEmailandPass } from '../utils/Validate'

const Login = () => {
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const [isSignIn,setSignIn] = useState(true)
  const [errMssg,setErrMssg] = useState(null)
  const toggleSignInForm = ()=>{
      setSignIn(!isSignIn)
  }
  const handleForm = ()=>{
     console.log(email.current.value);
     console.log(password.current.value);
     const errorMessage = chechEmailandPass(email.current.value,password.current.value,name.current.value)
     setErrMssg(errorMessage)
    console.log(errorMessage);
    
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='absolute w-3/12 bg-black p-10 my-36 mx-auto right-0 left-0 flex flex-col gap-8 bg-opacity-85 rounded-lg'>
      <h1
        className='text-white font-bold text-xl'>
        {isSignIn ? "Sign In":"Sign Up"}
        </h1>
        <input 
        ref={email} 
        placeholder='Email-address' type='Email' className='p-2 w-full bg-slate-500 rounded-lg'/>
        {/* {
          isSignIn === false ? <input placeholder='Enter your name' className='p-2 w-full bg-slate-500 rounded-lg' />: null
        } */}
        {
          !isSignIn && <input
          ref={name}
          placeholder='Enter your name' className='p-2 w-full bg-slate-500 rounded-lg' />
        }
        <input 
        ref={password}
        placeholder='password' type='password' className=' p-2 w-full bg-slate-500 rounded-lg' />
        <p className='text-red-700 text-sm'>{errMssg}</p>
        <button
        onClick={handleForm}
         className='p-2 w-full text-white bg-red-600 rounded-lg'>
          {isSignIn ?"Sign In":"Sign Up"}
          </button>
        <p className='text-white text-xs cursor-pointer'
         onClick={toggleSignInForm}>
          {isSignIn ? "New To Netflix Sign Up ? Sign Up now":"Already Signed Up !! Sign In Now"}
          </p>
      </form>
    </div>
  )
}

export default Login