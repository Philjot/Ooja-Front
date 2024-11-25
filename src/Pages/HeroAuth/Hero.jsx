import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='min-h-screen px-20'>
      <header className='flex justify-between items-center'>
           <div className='flex justify-center items-center'> 
            <img src="/svgs/shopping-bag-svgrepo-com.svg" alt='Ooja logo' width={100}/>
            <h2 className='font-mystery text-5xl text-amber-500'>Ooja</h2>
            </div>

            <nav>
                <ul className='flex justify-center items-center space-x-2'>
                    <li>
                        <Link to='/login' className='bg-amber-400 text-emerald-800 py-2 px-4 rounded-md font-bold'>Log In</Link>
                    </li>
                    <li>
                        <Link to='/register' className='bg-amber-900 text-emerald-800 py-2 px-4 rounded-md font-bold'>Register</Link>
                     </li>
                </ul>
            </nav>

      </header>
      <div className='flex flex-col items-center justify-center min-h-[400px] relative'>
        <img src='/svgs/new-life-cooking-utensils-home-appliances-set-svgrepo-com.svg' width={70} className='absolute top-10 left-5 rotate-12 -z-10'/>
        <h1 className='font-extrabold text-center font-playfair text-7xl'>
            Welcome to your Neighbourhood Market.  <span className='font-mystery text-amber-600'>Ooja</span> is the friendly <span className='font-mystery text-amber-600'>NEIGHBOUR</span> you can be confident in.
        </h1>
        <p className='text-center text-slate-500 text-lg my-10'>
            <ol>
                <li>we offer free delivery</li>
                <li>Distance is not a barrier</li>
                <li>For all your Vegetables</li>
                <li>Your Groceries</li>

            </ol>
        </p>
        <Link to='/register' className='bg-amber-900 text-tertiary py-2 px-4 rounded-md font-bold'>Get Started</Link>
        <img src='/svgs/shop-svgrepo-com.svg' alt='Ooja' width={100} className='absolute bottom-0 right-0 rotate-6'/>
      </div>
      
    </div>
  )
}

export default Hero
