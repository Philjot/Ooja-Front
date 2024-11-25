

import React, { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext'
import SectionOne from './SectionOne'
import MyProductSec from './MyProductSec'

function Dashboard() {

    const {state: {user}} = useContext(AppContext)

    const {user_name} = user.user

  return (
    <div>
      
        <div className='flex flex-col-reverse md:flex-row items-center justify-between bg-amber-300 rounded-lg shadow-md'>
            <div className='p-10'>
                <h2 className='font-mystery text-5xl text-secondary mb-5'>Hello, {user_name}!!!</h2>
                <p className='text-xl'>
                    Begin your journey at Ooja, buy and sell at your comfort.
                     We are here to make your experience worthwhile. Sell your producyts and buy from the best sellers...
                </p>
                <div mt-10>
                    <button className='py-3 mr-2 px-10 rounded-lg font-bold text-quinary bg-primary transition-all duration-150 ease-linear hover:bg-secondary'>Buy</button>
                    <button className='py-3 mr-2 px-10 rounded-lg font-bold text-quinary bg-primary transition-all duration-150 ease-linear hover:bg-primary'>Sell</button>
                </div>
            </div>
            <img src="/images/pexels-ekaterina-bolovtsova-4868606-removebg-preview.png" width={300} alt="Ooja image" />
        </div>  
        <SectionOne/>  
        <MyProductSec/>  
    </div>
  )
}

export default Dashboard
