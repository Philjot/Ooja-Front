import ProdCard from "./ProdCard";
import { useState, useEffect } from "react";
import  axios  from "axios";




const  SectionOne= () => {

    const [products, setProduct] = useState(null)

    useEffect(() => {
       
        const fetchProducts = async () => {
            try {
            const res = await axios.get('https://fakestoreapi.com/products');
            setProduct(res.data);
            console.log(res.data)
            } catch (error) {
                console.log(error)
            }
            
        };

        fetchProducts()
    }, []);
    return ( 
        <>

            <h2 className="text-secondary font-mystery font-bold text-3xl text-center my-10">Products</h2>

            <div className="bg-quinary h-[500px] mb-10 overflow-auto flex flex-wrap gap-2 p-10 justify-center items-center"> {products && products.map((product, index)=>(<ProdCard key = {index} {...product}/>))}</div>
        </>
     );
}
 
export default SectionOne;