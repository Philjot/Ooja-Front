import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa6";
import axios from 'axios'
import { toast } from 'react-toastify';
import { AppContext } from '../../Context/AppContext';

function LogIn() {


  const [see, setSee] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const  {dispatch}  = useContext(AppContext);

  const history =useNavigate()

  const handleSumbit = async (e) => {

    e.preventDefault();
    try{
      setLoading(true);
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/login`, {email, password});
      console.log(res.data)

      toast.success("Login successful 😁")
      dispatch({type: 'LOGIN', payload:res.data})
      localStorage.setItem("user", JSON.stringify(res.data))
      history('/')

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message || error.response.data.error || "an error occured")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      
      <div className='flex justify-center items-center min-h-full px-20'>
        <form onSubmit={handleSumbit} className="w-1/2 border text-center rounded-md shadow-xl shadow-neutral-500  bg-neutral-600 mt-10 px-20">
          <div className='flex justify-center'>
            <Link to='/'>
            <img src="/svgs/shopping-bag-svgrepo-com.svg" alt="Ooja"/>
            </Link>
          </div>
          <h1 className='text-center font-mystery text-3xl my-3'>Login</h1>
          <div className=' pt-5 font-playfair'>
            <div className='flex'>
            <label htmlFor="" className=''>Email: </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className='border border-amber-700 rounded-lg w-full ml-3  focus:bg-slate-900'/>
            </div>

            <div className='flex pt-5 relative'>
            <label htmlFor="">Password: </label>
            <input onChange={(e) => setPassword(e.target.value)} type={see?"text":"password"} className='w-full border-amber-700 rounded-lg border ml-3'/>
            <button type='button' onClick={() => setSee(!see)} className='absolute right-2'>
              {see ? <MdRemoveRedEye/> : <FaEyeSlash/>}
            </button>
            </div>
          </div>
          <button disabled={loading} type='submit' className={`rounded-md bg-amber-300 hover:font-extrabold duration-200 hover:shadow-md text-red-600 text-center p-2 mt-5 w-2/6 ${loading&&"cursor-not-allowed"}`}>{loading ? "Loading...": "Login"}</button>

          <p className='py-5 text-center'>Don't have an account already? <Link to="/register" className='text-amber-500 hover:font-extrabold duration-150'>Register</Link></p>
        </form>
      </div>
    </>
  )
}

export default LogIn;