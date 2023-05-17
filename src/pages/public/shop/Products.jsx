import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({totalItems}) => {
    const [products,setProducts]=useState([])
     const[currentPage, setCurrentPage]=useState(0)
     const[itemsPerPage, setItemsPerPage]=useState(10)
     const totalPages=Math.ceil(totalItems/itemsPerPage)
     const pageNumbers=[...Array(totalPages).keys()]
     const options=[5,10,15,20]

useEffect(()=>{
   async function fetchData(){
  const response=await  fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
const data=await response.json()
setProducts(data)
}
fetchData()
},[currentPage,itemsPerPage])

const handleOnChange=e=>{
    setItemsPerPage(parseInt(e.target.value))
    setCurrentPage(0)
}

    return (
        <>
      <div className='mt-12 mb-16 w-1/2 mx-auto'>
      <h1 className= 'mb-2 text-center font-bold text-center text-4xl'>Our Available Products</h1>
            <div className="text-center form-control">
      <input type="text" placeholder="Search" className="input input-bordered" />
    </div>
      </div>
 <div className='grid grid-cols-1 lg:grid-cols-3 mx-12 gap-4'>
    {
        products.map(product=><Product key={product._id} product={product}></Product>)
    }
 </div>

<div className='mx-auto w-1/2 text-center my-12'>
<div className="btn-group">
{
    pageNumbers.map(pageNumber=>
        <button key={pageNumber} onClick={()=>setCurrentPage(pageNumber)} className={currentPage===pageNumber? 'btn btn-active':'btn' }>{pageNumber}</button>
    )
}
 </div>
 <select className='select select-bordered ms-2' value={itemsPerPage} onChange={handleOnChange}>
{
    options.map(option=>
    <option key={option} value={option}>{option}</option>
    )
}
</select>
</div>
        </>
    );
};

export default Products;