import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import { useForm } from "react-hook-form";
import 'react-quill/dist/quill.snow.css';
import ImageUploading from "react-images-uploading";
import { toast } from 'react-toastify';
import { BlogPostHelper } from '../../helpers/BlogPostHelper';

const categorys = [
    "Blog",
    "Technology",
    "Education",
    "Food",
    "Entertainment",
    "Ai News",
]

const Write = () => {
    const [value, setValue] = useState('');
    const [title, setTitle] = useState('');
    const { handleSubmit } = useForm();
    const [images, setImages] = useState([]);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);

    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    const handleToPost = async (data) => {
        if (!category) {
            return toast.error("Please Select A Category")
        }
        if (images.length === 0) {
            return toast.error("Please Add A Image")
        }
        if (!(value.length > 100)) {
            return toast.error("Please Write Post Minimum 100 word")
        }
        const newData = {
            post_body: value,
            post_cat: category,
            blog_title: title
        }
        setLoading(true)
        const result = await BlogPostHelper('blog/create_post', newData, images)
        setLoading(false)
        if (result.status === 200) {
            toast.success(result.massage)
        } else {
            toast.error(result.massage)
        }
    }

    return (
        <div className='lg:w-3/4 md:10/12 mx-auto py-10'>
            <form onSubmit={handleSubmit(handleToPost)} className='flex flex-col md:flex-row gap-10'>
                <div style={{ flex: "5" }} className='flex-auto rounded-md'>
                    <section className='my-5 rounded-md'>

                        <input onChange={(e) => setTitle(e.target.value)} className='w-full mb-5 border border-gray-300 p-2 rounded-sm focus:outline-lime-500' type="text" name="title" placeholder='Title' />
                        <div className='h-60 rounded-md focus:outline-lime-500'>
                            <ReactQuill className='h-full border-none ' theme="snow" value={value} onChange={setValue} />;
                        </div>
                    </section>

                </div>
                <div style={{ flex: "2" }} className=''>
                    <div className='mb-5'>
                        <p className='text-3xl font-bold py-3'>Publish</p>
                        {/* <div className='flex justify-between items-center'>
                            <p>
                                <span className='font-bold mr-2'> Status:</span>
                                <span>Draft</span>
                            </p>
                            <p>
                                <span className='font-bold mr-2'>Visibility :</span>
                                <span>Public</span>
                            </p>
                        </div> */}
                        <div className='mt-5'>
                            <div className="btn-group ">
                                <button title='Save as a draft' className="btn btn-sm btn-active">Save as a draft</button>
                                <button type='submit' title='Update' className="btn md:px-10 btn-sm">Publish</button>
                            </div>
                        </div>
                        <div className="border border-secondary rounded-md bg-white mt-5">
                            <div className="card-title border-b border-secondary p-4">
                                <h3 className="text-base font-medium">
                                    Post Thumbnail {" "}
                                </h3>
                            </div>
                            <div className="py-2 px-5">
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
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className='text-3xl font-bold pb-3'>Category</p>
                        {
                            categorys.map((cat, inx) => <div key={inx} className='flex justify-normal items-center'>
                                <input onClick={() => setCategory(cat)} value={cat} type="radio" name="category" id={cat} />
                                <label className='text-blue-600 font-semibold ml-2' htmlFor={cat}>{cat}</label>
                            </div>)
                        }
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Write;