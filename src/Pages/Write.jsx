import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
    const [value, setValue] = useState('');
    console.log(value);

    return (
        <div className='lg:w-3/4 md:10/12 mx-auto py-10'>
            <div className='flex gap-10'>
                <div style={{ flex: "5" }} className='flex-auto rounded-md'>
                    <section className='my-5 rounded-md'>

                        <input className='w-full mb-5 border border-gray-300 p-2 rounded-sm focus:outline-lime-500' type="text" name="title" placeholder='Title' />
                        <div className='h-60 rounded-md focus:outline-lime-500'>
                            <ReactQuill className='h-full border-none ' theme="snow" value={value} onChange={setValue} />;
                        </div>

                    </section>
                </div>
                <div style={{ flex: "2" }} className=''>
                    <div className='mb-5'>
                        <p className='text-3xl font-bold py-3'>Publish</p>
                        <div className='flex justify-between items-center'>
                            <p>
                                <span className='font-bold mr-2'> Status:</span>
                                <span>Draft</span>
                            </p>
                            <p>
                                <span className='font-bold mr-2'>Visibility :</span>
                                <span>Public</span>
                            </p>
                        </div>
                        <div className='w-full py-2 bg-slate-100 flex justify-center mt-2 mb-4 rounded-md'>
                            <input style={{ display: "none" }} type="file" name="uploadFile" id="uploadFile" />
                            <label className='cursor-pointer hover:text-red-300 transition' title='Upload Image' htmlFor="uploadFile">Upload Image</label>
                        </div>
                        <div>
                            <div className="btn-group ">
                                <button title='Save as a draft' className="btn btn-sm btn-active">Save as a draft</button>
                                <button title='Update' className="btn md:px-10 btn-sm">Update</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl font-bold pb-3'>Category</p>
                        <div className='flex justify-normal items-center'>
                            <input type="radio" name="category" id="Blog" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Blog">Blog</label>
                        </div>
                        <div className='flex justify-normal items-center'>
                            <input type="radio" name="category" id="Technology" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Technology">Technology</label>
                        </div>
                        <div className='flex justify-normal items-center'>
                            <input type="radio" name="category" id="Education" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Education">Education</label>
                        </div>
                        <div className='flex justify-normal items-center'>
                            <input type="radio" name="category" id="Food" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Food">Food</label>
                        </div>
                        <div className='flex justify-normal items-center'>
                            <input type="radio" name="category" id="Entertainment" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Entertainment">Entertainment</label>
                        </div>
                        <div className='flex justify-normal items-center'>
                            <input className='text-blue-600 font-semibold' type="radio" name="category" id="Ai" />
                            <label className='text-blue-600 font-semibold ml-2' htmlFor="Ai">Ai News</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Write;