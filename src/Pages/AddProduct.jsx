import React from 'react'



function AddProduct() {
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
      
              <form className="mt-8 grid grid-cols-6 gap-6 ">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="name" className="block text-md font-bold text-amber-400">
                    Name
                  </label>
      
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="description" className="block text-md font-bold text-amber-400">
                    Description
                  </label>
      
                  <input
                    type="text"
                    id="description"
                    name="description"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="price" className="block text-md font-bold text-amber-400">
                    Price
                  </label>
      
                  <input
                    type="number"
                    id="price"
                    name="price"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6">
                  <label htmlFor="image" className="block text-sm font-bold text-amber-300"> Image </label>
      
                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="mt-1 w-full rounded-md  text-xl text-amber-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="category" className="block text-sm font-bold text-amber-300"> Category </label>
      
                  <input 
                    id="text"
                    name="category"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
                  />
                </div>
      
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="user" className="block text-sm font-bold text-amber-300">
                    User </label>
      
                  <input
                    type="user"
                    id="user"
                    name="user"
                    className="mt-1 w-full rounded-md border-gray-200 bg-gray-400 text-sm text-neutral-700 shadow-sm"
                  />
                </div>
      
      
                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-amber-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-amber-600 focus:outline-none focus:ring active:text-blue-500"
                  >
                    Add
                  </button>
      
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </div>
    
  )
}

export default AddProduct
