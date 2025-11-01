import React, {useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './Productitem.jsx';
import { assets } from '../assets/assets';


const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
     // Get the last 4 products as the latest collection
     useEffect(() => {
        setLatestProducts(products.slice(0,10));
     },[])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-34 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Explore our newest arrivals and discover the latest trends in fashion. Stay ahead with our curated collection of fresh styles and must-have pieces.
            </p>
        </div>
      {/* Rendering products*/}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item,index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
        }
      </div>
    </div>
  )
}

export default LatestCollection
