import React from 'react';
import Products from './Products';
import useTitle from '../../../hooks/useTitle';
import { useLoaderData } from 'react-router-dom';

const Shop = () => {
    useTitle('shop')
    const {totalItems}=useLoaderData()
    return (
        <>
            <Products totalItems={totalItems}></Products>
        </>
    );
};

export default Shop;