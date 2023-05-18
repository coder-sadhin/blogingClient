import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onLoginSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="hero py-10">
            <div className="card flex-shrink-0 w-11/12 md:w-6/12 shadow-2xl bg-base-100">
                <p className="text-4xl text-center pt-2 font-bold">Login now!</p>
                <form onSubmit={handleSubmit(onLoginSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email")} placeholder="email" className="input input-bordered" />
                        {errors.email && <span>Email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password")} placeholder="password" className="input input-bordered" />
                        {errors.password && <span>Password field is required</span>}
                        <div className='flex justify-between'>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <p className="label-text-alt">New on website?
                                    <Link className='text-blue-400 ml-1' to={'/register'}>
                                        Create New Account
                                    </Link>
                                </p>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;