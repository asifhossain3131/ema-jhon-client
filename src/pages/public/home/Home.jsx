import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-4 mt-16'>
            <div className='space-y-4'>
<p><small>Sale upto 70% off</small></p>
<h1 className='text-4xl font-bold'>New Collection For all</h1>
<p className='font-semibold text-gray-700'>Discover all the new arrivals of ready-to-wear collection.</p>
<div><Link to='/shop'><button className="btn btn-info">Shop now</button>
</Link>  </div>          
</div>
            <div>
                <img className='w-[600px]' src="https://img.freepik.com/free-photo/full-length-portrait-happy-family_171337-2281.jpg?w=900&t=st=1684262689~exp=1684263289~hmac=1222c747ed0ef6b0fe9298835865eb2064222a2551a1b568940ed7e5b73d17cb" alt="" />
            </div>
        </div>
    );
};

export default Home;