import React, { useContext, useState } from 'react';
import useTitle from '../../../../hooks/useTitle';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';

const UserRegistration = () => {
    useTitle('registration')
    const[error,setError]=useState('')
    const [success,setSuccess]=useState('')
    const {createUser,profileUpdate, logOut}=useContext(AuthContext)
    
    const handleRegister=e=>{
e.preventDefault()
const form=e.target 
const name=form.name.value
// const photo=form.photo.value
const email=form.email.value 
const password=form.password.value 

setError('')
setSuccess('')

createUser(email,password)
.then(result=>{
    profileUpdate(name)
    logOut()
    setSuccess('Registration has been successful. Please,login now!')
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
            <h1 className="text-5xl font-bold">REGISTRATION</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
          <form onSubmit={handleRegister}>
          <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="user name" name='name' className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="file" className="file-input file-input-bordered w-full max-w-xs" required />
              </div>
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
              </div>
              <div>
                <span className='text-red-500'>{error}</span>
                <span className='text-green-500'>{success}</span>
              </div>
              <div className="form-control mt-6">
<input type="submit" value="Register" className="btn btn-primary" />
              </div>
          </form>
          <p>Already have an account?
            <Link to='/userlogin' className='ms-2 font-semibold text-blue-700 underline'>Login</Link>
          </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserRegistration;