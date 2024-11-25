import React, { useState } from 'react'
import { useEffect } from 'react';
import ProdCard from './ProdCard';
import axios from 'axios';
import { FaPlusCircle } from 'react-icons/fa'



function MyProductSec() {

    const [ myProducts, setMyProduct ] = useState([]);

    useEffect(() => {
        const fetchMyProduct = async () => {
        try{
            const response = await axios.get('https://fakestoreapi.com/products');
            const data = response.data
            console.log(data, "mine")
            setMyProduct(data);
        } catch (error) {
            console.log(error)
        }

    };
    fetchMyProduct()

}, []);


  return (
        <div className='h-[500px] overflow-auto w-full relative bg-quinary scroll-m-5'>
           
            <div className='top-0 sticky text-center bg-amber-400 py-2 flex items-center justify-center'>
                <h2 className='text-purple-200 font-bold text-lg'> My Products </h2>
                <FaPlusCircle className='text-2xl text-primary mr-3' />
            </div>

                <div className="flex flex-wrap gap-2 mt-5 justify-center items-center"> {myProducts.map((product, index)=>(<ProdCard key = {index} {...product}/>))}
                </div>
        </div>
  )
}

export default MyProductSec
