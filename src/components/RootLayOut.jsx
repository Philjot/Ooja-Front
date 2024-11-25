import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Footer from './Footer'


function RootLayOut() {
  return (
    <>
      
      <Navigation/>
      
      <main className='min-h-dvh px-5'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default RootLayOut
