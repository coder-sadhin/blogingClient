import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import { toast } from 'react-toastify';
import Menu from '../Component/Menu';

const blogData = {
    title: "ডায়াবেটিস থেকে বাঁচার উপায় ২০২২ । ডায়াবেটিস হলে কি কি করা যাবে না",
    text: "tipsonetime.com এ আপনাকে স্বাগোতম। ইদানিং ডায়াবেটিস বাংলাদেশ মহামারী আকার ধারণ করেছে, জনসংখ্যা গবেষণা প্রতিষ্ঠানের তথ্য মতে দেশে ডায়াবেটিস এ আক্রান্ত প্রায় ১ কোটি ১০ লাখ, তার মধ্যে ১৮- ৩৪ বয়সের হলো ২৬ লক্ষ, বাকী ৮৪ লক্ষ হলে ৩৫ বছরের বেশি বয়সি। এই তথ্য থেকে কিছুটা ধারনা করতে পারছেন দেশে ডায়াবেটিস কিভাবে ছড়িয়ে পড়েছে।",
    img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuYNgoQf99XXGenDHeVNX9u5YPkhbMmYYb8I51z0qVPZuB7yBAoAwnVpsYha34A0VWZNnx_IXV64UlqfltrxRm4Sqi8QVeWc-KgDoyEZhJiPJ44whmbebz3gvOfXMK6sWvG5dceXvvKnyyXaIG8VbPFHMGQ5wx6OzEeRIGFjiJU1Kuq9LPRyvfE0I1/w640-h360/ukti.jpg',
    link: 'blog1',
    id: "he22"
};

const Single = () => {
    const handleToDelete = () => {
        confirmAlert({
            title: "Choose Your Address",
            message: "messeage",
            buttons: [
                {
                    label: `All Right`,
                    onClick: async () => {
                        // Perform deletion logic here
                        toast.success("Delete button clicked");
                    }
                },
                {
                    label: `Cancel`,
                    onClick: () => { }
                }
            ]
        });
    };

    return (
        <div className='lg:w-3/4 md:10/12 mx-auto py-9'>
            <div className='flex gap-10'>
                <div style={{ flex: "5" }} className='flex-auto rounded-md'>
                    <section>
                        <div className='w-full h-80 rounded-t-md'>
                            <img className='w-full h-full' src={blogData.img} alt="blogImage" />
                        </div>
                        <div className='flex justify-between items-center py-2 px-3 bg-slate-100'>
                            <div className='flex items-center'>
                                <div className='w-14 h-14 rounded-full'>
                                    <img className='w-full h-full rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-fMXEWyzl7MNd3Q15JOeyzHxasfVIHK6K_A&usqp=CAU" alt="" />
                                </div>
                                <div className='ml-3'>
                                    <p className='text-xl font-bold'>John Ebraham</p>
                                    <p className=''>Posted 2 days ago</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Link to={`/write?edit=${blogData.id}`}>
                                    <span
                                        className="p-2 flex items-center border border-secondary hover:bg-secondary rounded-full text-secondary hover:text-white cursor-pointer duration-300"
                                        title="Edit"
                                    >
                                        <AiOutlineEdit size={15} />
                                    </span>
                                </Link>
                                <p
                                    className="p-2 flex items-center border border-error hover:bg-error rounded-full text-error hover:text-white cursor-pointer duration-300"
                                    title="Delete"
                                    onClick={handleToDelete}
                                >
                                    <AiOutlineDelete size={15} />
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className='py-5'>
                        <p className='md:text-2xl font-bold text-xl mb-2'>
                            {blogData.title}
                        </p>
                        <p className='text-justify text-black font-medium'>
                            ডায়াবেটিস হলে খাদ্য নিয়ন্ত্রণ খুবই গুরুত্বপূর্ণ হয়ে পড়ে, কেননা আপনার ডায়াবেটিসের মাত্রা সম্পূর্ণ নির্ভর করে আপনার খাদ্যের উপর,  ডায়াবেটিস রোগের সবসময় সাবধান থাকতে হয় এবং নিজেকে সামলাতে হয়, যেসব খাবারগুলো নিয়ন্ত্রণ বা বর্জন করা উচিত তা হল <br /><br />
                            ডায়াবেটিস রোগীদের মিষ্টি জাতীয় খাবার খুবই পছন্দনীয় হয়ে ওঠে  তবে বিশেষজ্ঞরা মিষ্টি জাতীয় খাবার নিয়ন্ত্রণ করার জন্য পরামর্শ দিয়ে থাকেন, তবে চিকিৎসকরা বলেন পরিমিত পরিমাণে চিনি খাওয়ার জন্য তবে সেটা যাতে অতিরিক্ত না হয় সেদিকে বিশেষভাবে খেয়াল রাখতে হবে। <br /><br />
                            মসলাযুক্ত খাবার পরিহার করা উচিত মসলা যুক্ত খাবার অতিরিক্ত খাওয়ার ফলে নানাবিধ সমস্যা ও হজমে তারতম্য দেখা দিতে পারে এবং এর ফলে ডায়াবেটিসের নিয়ন্ত্রণ হারিয়ে যেতে পারে তাই মসলাযুক্ত খাবার পরিহার করা।
                        </p>
                    </section>
                </div>
                <div style={{ flex: "2" }} className=''>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Single;
