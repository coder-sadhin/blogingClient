import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ImageUploading from "react-images-uploading";
import { useQuery } from '@tanstack/react-query';
import { ProfileUpdateHelper } from '../../helpers/ProfileUpdateHelper';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const customerInfo = JSON.parse(localStorage.getItem('writer'));
    const writerInfo = JSON.parse(localStorage.getItem('writer'));


    const { data: writerData = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_APIURL}/writer/profile`, {
                    headers: {
                        'authorization': `Bearer ${writerInfo.token}`
                    }
                });
                const data = await res.json();
                return data
            }
            catch (err) { }
        }
    })

    const [images, setImages] = useState([]);

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const handleToUpdate = async (data) => {
        setLoading(true)
        const response = await ProfileUpdateHelper('writer/profileUpdate', data, images)
        setLoading(false)
        if (response.status === 200) {
            toast.success(response.massage);
            refetch()
            return
        }
        toast.error(response.err)
    }


    return (
        <div className='py-5 md:w-10/12 mx-auto'>
            <h2 className="text-title text-lg md:text-2xl pb-3">Writer Profile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5">
                <div className="p-4 border border-gray-200 bg-white shadow-sm  max-w-md">
                    <h2 className="text-title text-md md:text-xl pb-2 uppercase">Basic Info</h2>
                    <div className="overflow-x-auto">
                        <div className='flex justify-center my-5'>
                            <div className="avatar online">
                                <div className="w-24 rounded-full">
                                    {
                                        !(writerData?.data?.profile_image) ?
                                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt='' /> :
                                            <img src={writerData?.data?.profile_image} alt='profile_image' />
                                    }
                                </div>
                            </div>
                        </div>

                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td>User Name: </td>
                                    <td>{writerData?.data?.writer_userName}</td>
                                </tr>
                                <tr>
                                    <td>Name: </td>
                                    <td>{writerData?.data?.writer_fullname}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{writerData?.data?.writer_email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="p-4 border border-gray-200 bg-white shadow-sm  max-w-md">
                    <h2 className="text-title text-md md:text-xl pb-2 uppercase">Update Info</h2>
                    <form onSubmit={handleSubmit(handleToUpdate)} className="flex flex-col gap-4">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Full Name
                                    <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                {...register("writer_fullname")}
                                type="text"
                                defaultValue={writerData?.data?.writer_fullname}
                                placeholder="Full Name"
                                required
                                className="input input-bordered focus:outline-none focus:border-gray-300 rounded-none w-full h-[40px]"
                            />
                            <label className="label">
                                {errors.cust_fullname?.type === "required" && (
                                    <span className="label-text-alt text-red-500 font-Roboto">
                                        Writer Name is required
                                    </span>
                                )}
                            </label>
                        </div>

                        <div className="border bg-white my-5">
                            <div className="card-title border-b p-4">
                                <h3 className="text-base font-medium">
                                    Profile Image {" "}
                                    <span className="text-2xs text-gray-400"> ( 300x300 )</span>{" "}
                                </h3>
                            </div>
                            <div className="py-5 px-5">
                                <div className="col-span-8">
                                    <ImageUploading
                                        value={images}
                                        onChange={onChange}
                                        dataURLKey="data_url"
                                    >
                                        {({
                                            imageList,
                                            onImageUpload,
                                            onImageRemoveAll,
                                            onImageUpdate,
                                            onImageRemove,
                                            isDragging,
                                            dragProps,
                                        }) => (
                                            // write your building UI
                                            <div className="upload__image-wrapper">
                                                <p
                                                    className="text-xs cursor-pointer py-2 px-3"
                                                    style={isDragging ? { color: "red" } : undefined}
                                                    onClick={onImageUpload}
                                                    {...dragProps}
                                                >
                                                    Click or Drop Your Image
                                                </p>
                                                &nbsp;
                                                {imageList.map((image, index) => (
                                                    <div key={index} className="image-item">
                                                        <div className="image-item__btn-wrapper">
                                                            {/* <button onClick={() => onImageUpdate(index)}>Update</button> */}
                                                            <button
                                                                className="text-red-600"
                                                                onClick={() => onImageRemove(index)}
                                                            >
                                                                X
                                                            </button>
                                                        </div>
                                                        <img
                                                            className="w-20 h-20"
                                                            src={image["data_url"]}
                                                            alt=""
                                                        />
                                                    </div>
                                                ))}


                                            </div>
                                        )}
                                    </ImageUploading>
                                </div>
                                <small className="text-2xs text-gray-400">
                                    It's Visible All your post details
                                </small>
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Mobile Number <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                {...register("writer_phone")}
                                type="number"
                                defaultValue={writerData?.data?.writer_phone}
                                placeholder="Mobile Number"
                                className="input input-bordered focus:outline-none focus:border-gray-300 rounded-none w-full h-[40px]"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Country Name <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                {...register("writer_country")}
                                type="text"
                                defaultValue={writerData?.data?.writer_country}
                                placeholder="Country Name"
                                className="input input-bordered focus:outline-none focus:border-gray-300 rounded-none w-full h-[40px]"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    City Name <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                {...register("writer_city")}
                                type="text"
                                defaultValue={writerData?.data?.writer_city}
                                placeholder="City Name"
                                className="input input-bordered focus:outline-none focus:border-gray-300 rounded-none w-full h-[40px]"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">
                                    Zip Code <span className="text-red-600">*</span>
                                </span>
                            </label>
                            <input
                                {...register("writer_zip")}
                                type="text"
                                defaultValue={writerData?.data?.writer_zip}
                                placeholder="Zip Code"
                                className="input input-bordered focus:outline-none focus:border-gray-300 rounded-none w-full h-[40px]"
                            />
                        </div>
                        <button type='submit' className="btn btn-primary max-w-lg text-white">Update Changes</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Profile;