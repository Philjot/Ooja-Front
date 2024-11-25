import { Routes, Route } from 'react-router-dom'
import './App.css'
import RootLayOut from './components/RootLayOut'
import Hero from './Pages/HeroAuth/Hero'
import LogIn from './Pages/HeroAuth/LogIn'
import Register from './Pages/HeroAuth/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react'
import Dashboard from './Pages/main/Dashboard/Dashboard'
import { AppContext } from './Context/AppContext'
import EditProduct from './Pages/EditProduct'
import AddProduct from './Pages/AddProduct.jsx'

function App() {
    const {state:{user}} = useContext(AppContext)

    if(!user){

      return (
        <>
        <ToastContainer theme='colored'/>
          <Routes>
            <Route path='/' element={<Hero/>}></Route>
            <Route path='/login' element={<LogIn/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          

          </Routes>
        </>
      )}
  return (
    <>
    <ToastContainer theme='colored'/>
      <Routes>
        <Route path='/' element={<RootLayOut/>}>
        <Route index element={<Dashboard/>}/>
        </Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/editproduct' element={<EditProduct/>}></Route>
      </Routes>
    </>
  )
}

export default App
