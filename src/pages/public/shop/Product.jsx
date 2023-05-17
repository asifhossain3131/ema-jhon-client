import React from 'react';

const Product = ({product}) => {
  const {_id, name,price,seller,ratings,img,stock}=product
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className='font-semibold'>Price: ${price}</p>
    <div className="space-y-2">
      <p>Manufacturer: {seller}</p>
      <p>Ratings: {ratings} </p>
      <p>Stock: {stock}</p>
      <button className="btn btn-[#fde68a] w-full">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default Product;