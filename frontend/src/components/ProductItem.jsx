import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext.jsx';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  console.log("Image prop:", image);

  const { currency } = useContext(ShopContext);

  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden">
        <img
          className="hover:scale-110 transition ease-in-out w-full h-full object-cover"
          src={image?.[0] || '/placeholder.jpg'}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;