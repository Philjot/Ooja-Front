import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../../Context/AppContext';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';


function Register() {

  const initialState = {
    first_name : '',
    last_name: '',
    age:'',
    email: '',
    user_name: '',
    password:'',
    }

    const[formData, setFormData] = useState(initialState)
    const history = useNavigate()
    const {dispatch} = useContext(AppContext)
    const [loading, setLoading] = useState(false)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      setLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/signUp`, formData)
      localStorage.setItem("user", JSON.stringify(res.data))
      toast.success("Registration Successful 🤗")
      dispatch({type:"LOGIN", payload:res.data})
      history('/')
    } catch (error){
      toast.error(error.response.data.message || error.response.data. error || "An error occured")
     }finally{
      setLoading(false)
     }
    
  }

  const handleChange =(e)=> {
    const {name, value} = e.target

    setFormData((prev)=>({
      ...prev, [name]:value
    }))
  }
  return (
    <div>
      
<section className="bg-neutral-100 min-h-dvh py-10">
  <div className="flex flex-col justify-center items-center">
    
    <main
      className="flex items-center justify-center px-8 py-8 border border-amber-600 rounded-xl shadow-3xl shadow-neutral-900 sm:px-12 lg:col-span-7 w-1/2 shadow-lg bg-neutral-600 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
       
        <img src='/svgs/shopping-bag-svgrepo-com.svg' alt='Ooja' className='text-center'/>
        <h1 className="mt-6 text-3xl font-mystery font-extrabold text-center text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to Ooja
        </h1>

        <p className="mt-4 leading-relaxed text-center text-lg text-amber-500">
          Your only Neighbourhood Market, Closer to you than you imagine. Smile! We gat you Kovad
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6 ">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-md font-bold text-amber-400">
              First Name
            </label>

            <input
              type="text"
              id="firstName"
              name="first_name"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-md font-bold text-amber-400">
              Last Name
            </label>

            <input
              type="text"
              id="lastName"
              name="last_name"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-md font-bold text-amber-400">
              Age
            </label>

            <input
              type="age"
              id="age"
              name="age"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-bold text-amber-300"> Email </label>

            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              className="mt-1 w-full rounded-md  text-xl text-amber-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-bold text-amber-300"> User name </label>

            <input 
              id="username"
              name="user_name"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-bold text-amber-300">
              Password </label>

            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline"> terms and conditions </a>
              and
              <a href="#" className="text-gray-600 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              className={`inline-block shrink-0 rounded-md border border-blue-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-blue-500 ${loading?"cursor-not-allowed opacity-55":""}`} disabled={loading}            >
              {loading? "loading..." : "Create an account"}
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login" className="text-gray-700 underline hover:text-amber-600 hover:font-semibold transition-all duration-200 hover:text-xl">Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>
    </div>
  )
}

export default Register
