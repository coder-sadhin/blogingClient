import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onLoginSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="hero py-10">
            <div className="card flex-shrink-0 w-11/12 md:w-6/12 shadow-2xl bg-base-100">
                <p className="text-4xl text-center pt-2 font-bold">Register now!</p>
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
                        <div className=''>
                            <label className="label">
                                <p className="label-text-alt text-right">Already have account?
                                    <Link className='text-blue-400 ml-1' to={'/login'}>
                                        Login page !
                                    </Link>
                                </p>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register !</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;