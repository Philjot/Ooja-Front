

const ProdCard = ({ image, title, category, price, description }) => {
   

  return (
    <div>
        <div className='group h-[350px] shadow-lg rounded-md w-56 overflow-hidden'>
            <img src={image} alt={title} className='w-full h-1/2 object-cover object-center' />

            <div className='p-5 space-y-1'>
                <h3 className='text-purple-200 font-bold text-lg'> {title.slice(0,20)}...</h3>
                <p>${price}</p>
                <p className='text-sm capitalize text-red-500'>{category}</p>
                <button className='border rounded w-full border-primary transition-all duration-150 ease-linear group-hover:bg-primmary group-hover:text-white'>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default ProdCard
