import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginHelper } from '../helpers/LoginHelper';
import LoadingSpinner from '../utils/LoadingSpinner';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/writer/profile'

    const onLoginSubmit = async (data) => {
        setLoading(true);
        const result = await LoginHelper('writer/login', data)
        setLoading(false);
        if (result.status === 200) {
            toast.success(result.massage);
            navigate(from, { replace: true })
        } else {
            toast.error(result.massage);
        }
    }

    if (loading) {
        return <LoadingSpinner />
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