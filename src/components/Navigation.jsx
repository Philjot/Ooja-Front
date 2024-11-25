import { Link, NavLink } from "react-router-dom"
import {AppContext} from "../Context/AppContext"
import { useContext, useState } from "react";
import { IoMdClose, IoIosMenu } from "react-icons/io";

function Navigation() {

  const { state: {user}, dispatch } = useContext(AppContext);
  const [open, setOpen] = useState(false)

  const {first_name} = user.user

  const handleLogout = ()=>{
    const sure = confirm("Are you sure");
    if(sure){
      dispatch({type: "LOGOUT" });
      localStorage.removeItem("user");
    }
  }
  
  return (

        <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <Link to='/' className="flex items-center justify-center">
            <img src="/svgs/shopping-bag-svgrepo-com.svg" alt="Ooja" width={80}/>
            <span className="font-mystery font-extrabold text-4xl text-amber-500">Ooja</span>
        </Link>
      </div>

      <div className={`${open?"block":"hidden"} md:block`}>
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/"> Home </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/careers"> Careers </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/market"> My Market </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/services"> Services </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/projects"> Projects </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/blog"> Blog </NavLink>
            </li>
            <li>
              <p>Hi {first_name}👋</p>
              <button onClick={handleLogout} className="bg-amber-400 text-tertiary py-2 px-4 rounded-md font-bold transition-all ease-linear duration-150 hover:bg-yellow-950 hover:text-emerald-50">Log Out</button>
            </li>
          </ul>
        </nav>

                  {/* MOBILE */}


        {open && (<nav aria-label="Global" className="w-screen fixed py-5 left-0 top-20 bg-black/20 z-30 md:hidden transition-all duration-200 ease-linear backdrop-blur-sm ">
          <ul className="flex flex-col items-center gap-6 text-sm">
            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/"> Home </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/careers"> Careers </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/market"> My Market </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/services"> Services </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/projects"> Projects </NavLink>
            </li>

            <li>
              <NavLink className="text-gray-500 transition hover:text-gray-500/75" to="/blog"> Blog </NavLink>
            </li>
            <li>
              <p>Hi {first_name}👋</p>
              <button onClick={handleLogout} className="bg-amber-400 text-tertiary py-2 px-4 rounded-md font-bold transition-all ease-linear duration-150 hover:bg-yellow-950 hover:text-emerald-50">Log Out</button>
            </li>
          </ul>
        </nav>)}
      </div>

          <div className="flex items-center gap-4 md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/70" onClick={()=>{setOpen(!open)}}> {open? <IoMdClose size={30}/> : <IoIosMenu size={30}/>}</button>
          </div>
      
    </div>
  </div>
</header>
    
  )
}

export default Navigation
