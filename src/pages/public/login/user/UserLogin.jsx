import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import { AuthContext } from '../../../../provider/AuthProvider';

const UserLogin = () => {
    useTitle('userLogin')
    const[error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const navigate=useNavigate()
    const {login}=useContext(AuthContext)
    const location=useLocation()
    let target=location?.state?.from?.pathname||'/'
    
    const handleLogin=e=>{
e.preventDefault()
const form=e.target 
const email=form.email.value 
const password=form.password.value 

setError('')
setSuccess('')

login(email,password)
.then(result=>{
setSuccess('Login successful')
navigate(target)
form.reset()
})
.catch(error=>{
    setError(error.message)
})

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full"> 
         <div className="text-center mb-4">
            <h1 className="text-5xl font-bold">USER LOGIN</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
          <form onSubmit={handleLogin}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div>
                <span className='text-red-500'>{error}</span>
                <span className='text-green-500'>{success}</span>
              </div>
              <div className="form-control mt-6">
<input type="submit" value="Login" className="btn btn-primary" />
              </div>
          </form>
          <p>Don't have an account?
            <Link to='/userregistration' className='ms-2 font-semibold text-blue-700 underline'>Register</Link>
          </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserLogin;