import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import { toast } from 'react-toastify';

const headermanus = [
    {
        path: '/',
        name: "Homepage"
    },
    {
        path: '/blogs',
        name: "Blogs"
    },
    {
        path: '/technology',
        name: "Technology"
    },
    {
        path: '/ai',
        name: "AI News"
    },
    {
        path: '/education',
        name: "Education"
    },
    {
        path: '/foods',
        name: "Foods"
    },
    {
        path: '/entertainment',
        name: "Entertainment"
    }
]


const Header = () => {
    const user = JSON.parse(localStorage.getItem("writer"));
    const navigate = useNavigate();
    const [show, setShow] = useState(false)
    const [show2, setShow2] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem("writer");
        toast.info("Writer Log Out")
        navigate("/");
    }

    const handleClick = (state) => {
        if (state.type === "right") {
            setShow(state.value)
        }
        if (state.type === "left") {
            setShow2(state.value)
        }
    }

    return (
        <div className='bg-base-300'>
            <div className="navbar max-w-[1440px] mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} onClick={() => handleClick({ value: true, type: "left" })} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} onClick={() => handleClick({ value: false, type: "left" })} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${show2 ? "block" : "hidden"}`}>
                            {
                                headermanus.map((namu, inx) => <li key={inx}>
                                    <Link to={namu.path}>{namu.name}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link className="btn btn-ghost normal-case text-xl" to={'/'}>
                        Sadhin Blogs
                    </Link>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} onClick={() => handleClick({ value: true, type: "right" })} className="btn btn-ghost btn-circle rounded-full avatar">
                            <div className="flex justify-center items-center">
                                <BiUserCircle size={35} />
                            </div>
                        </label>
                        <ul tabIndex={0} onClick={() => handleClick({ value: false, type: "right" })} className={`menu menu-compact dropdown-content mt-3 p-2 ${show ? "block" : "hidden"} shadow bg-base-100 rounded-box w-52`}>
                            {
                                user && <>
                                    <li>
                                        <Link to={'/writer/profile'}>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/write'}>
                                            Write blog
                                        </Link>
                                    </li>
                                </>
                            }
                            {
                                !user ? <>
                                    <li>
                                        <Link to={'/writer/login'}>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/writer/register'}>
                                            Register
                                        </Link>
                                    </li>
                                </> :
                                    <li>
                                        <p onClick={() => handleLogout()}>Logout</p>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;