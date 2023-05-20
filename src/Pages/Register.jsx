import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PostHelper } from '../helpers/PostHelper';
import LoadingSpinner from '../utils/LoadingSpinner';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorTxt, seterrorTxt] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onLoginSubmit = async (data) => {
        const password = data.password;
        const minNumberofChars = 6;
        const regularExpression =
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (password.length < minNumberofChars) {
            seterrorTxt("Password must be atleast 6 characters long");
            return;
        } else {
            seterrorTxt("");
        }
        if (!regularExpression.test(password)) {
            seterrorTxt(
                "password should contain atleast one number and one special character"
            );
            return;
        } else {
            seterrorTxt(
                ""
            );
        }
        setLoading(true);

        const result = await PostHelper('writer/register', data)
        // console.log(result);

        setLoading(false);
        if (result.status_code === 200) {
            toast.success(result.message)
            navigate("/writer/verification");
        } else if (result.status_code === 400) {
            toast.info(result.message)
        }
        else {
            toast.error(result.message);
        }

    }

    if (loading) {
        return <LoadingSpinner />
    }

    return (
        <div className="hero py-10">
            <div className="card flex-shrink-0 w-11/12 md:w-6/12 shadow-2xl bg-base-100">
                <p className="text-4xl text-center pt-2 font-bold">Register now!</p>
                <form onSubmit={handleSubmit(onLoginSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" {...register("writer_userName")} placeholder="User Name" className="input input-bordered" />
                        {errors.writer_userName && <span>User Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" {...register("writer_fullname")} placeholder="Full Name" className="input input-bordered" />
                        {errors.writer_fullname && <span>Email field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("writer_email")} placeholder="email" className="input input-bordered" />
                        {errors.writer_email && <span>Email field is required</span>}
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