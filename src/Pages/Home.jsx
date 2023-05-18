import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
    {
        title: "ডায়াবেটিস থেকে বাঁচার উপায় ২০২২ । ডায়াবেটিস হলে কি কি করা যাবে না",
        text: "tipsonetime.com এ আপনাকে স্বাগোতম। ইদানিং ডায়াবেটিস বাংলাদেশ মহামারী আকার ধারণ করেছে,   জনসংখ্যা গবেষণা প্রতিষ্ঠানের তথ্য মতে দেশে ডায়াবেটিস এ আক্রান্ত প্রায় ১ কোটি ১০ লাখ,  তার মধ্যে ১৮- ৩৪ বয়সের হলো ২৬ লক্ষ,  বাকী ৮৪ লক্ষ হলে ৩৫ বছরের বেশি বয়সি। এই তথ্য  থেকে কিছুটা ধারনা করতে পারছেন দেশে ডায়াবেটিস কিভাবে ছড়িয়ে পড়েছে।",
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuYNgoQf99XXGenDHeVNX9u5YPkhbMmYYb8I51z0qVPZuB7yBAoAwnVpsYha34A0VWZNnx_IXV64UlqfltrxRm4Sqi8QVeWc-KgDoyEZhJiPJ44whmbebz3gvOfXMK6sWvG5dceXvvKnyyXaIG8VbPFHMGQ5wx6OzEeRIGFjiJU1Kuq9LPRyvfE0I1/w640-h360/ukti.jpg',
        link: 'blog1',
    },
    {
        link: 'blog2',
        title: "ডায়াবেটিস থেকে বাঁচার উপায় ২০২২ । ডায়াবেটিস হলে কি কি করা যাবে না",
        text: "tipsonetime.com এ আপনাকে স্বাগোতম। ইদানিং ডায়াবেটিস বাংলাদেশ মহামারী আকার ধারণ করেছে,   জনসংখ্যা গবেষণা প্রতিষ্ঠানের তথ্য মতে দেশে ডায়াবেটিস এ আক্রান্ত প্রায় ১ কোটি ১০ লাখ,  তার মধ্যে ১৮- ৩৪ বয়সের হলো ২৬ লক্ষ,  বাকী ৮৪ লক্ষ হলে ৩৫ বছরের বেশি বয়সি। এই তথ্য  থেকে কিছুটা ধারনা করতে পারছেন দেশে ডায়াবেটিস কিভাবে ছড়িয়ে পড়েছে।",
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuYNgoQf99XXGenDHeVNX9u5YPkhbMmYYb8I51z0qVPZuB7yBAoAwnVpsYha34A0VWZNnx_IXV64UlqfltrxRm4Sqi8QVeWc-KgDoyEZhJiPJ44whmbebz3gvOfXMK6sWvG5dceXvvKnyyXaIG8VbPFHMGQ5wx6OzEeRIGFjiJU1Kuq9LPRyvfE0I1/w640-h360/ukti.jpg'
    },
    {
        link: 'blog3',
        title: "ডায়াবেটিস থেকে বাঁচার উপায় ২০২২ । ডায়াবেটিস হলে কি কি করা যাবে না",
        text: "tipsonetime.com এ আপনাকে স্বাগোতম। ইদানিং ডায়াবেটিস বাংলাদেশ মহামারী আকার ধারণ করেছে,   জনসংখ্যা গবেষণা প্রতিষ্ঠানের তথ্য মতে দেশে ডায়াবেটিস এ আক্রান্ত প্রায় ১ কোটি ১০ লাখ,  তার মধ্যে ১৮- ৩৪ বয়সের হলো ২৬ লক্ষ,  বাকী ৮৪ লক্ষ হলে ৩৫ বছরের বেশি বয়সি। এই তথ্য  থেকে কিছুটা ধারনা করতে পারছেন দেশে ডায়াবেটিস কিভাবে ছড়িয়ে পড়েছে।",
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuYNgoQf99XXGenDHeVNX9u5YPkhbMmYYb8I51z0qVPZuB7yBAoAwnVpsYha34A0VWZNnx_IXV64UlqfltrxRm4Sqi8QVeWc-KgDoyEZhJiPJ44whmbebz3gvOfXMK6sWvG5dceXvvKnyyXaIG8VbPFHMGQ5wx6OzEeRIGFjiJU1Kuq9LPRyvfE0I1/w640-h360/ukti.jpg'
    }
]

const Home = () => {
    return (
        <div className='md:10/12 lg:w-8/12 mx-auto'>
            <div className=''>

                {
                    blogs.map((blog, idx) =>
                        <div key={idx}>
                            <div className='md:block hidden'>
                                <div className={`grid grid-cols-2 gap-3 my-14`}>
                                    <div className=''>
                                        <Link to={`/blog/${blog.link}`}>
                                            <p className='text-3xl font-bold'>{blog.title}</p>
                                        </Link>
                                        <p className='text-justify my-4'>{blog.text.slice(0, 150)}</p>
                                        <Link to={`/blog/${blog.link}`}>
                                            <button className='btn btn-primary btn-sm'>Read more</button>
                                        </Link>
                                    </div>
                                    <div className={`${!(idx % 2 === 0) ? "order-first" : ""} bg-blue-400 relative`}>
                                        <img className={`absolute top-[-16px] ${!(idx % 2 === 0) ? "right-4" : "left-4"} w-full`} src={blog.img} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className='block w-96 mx-auto md:hidden'>
                                <div className="my-5 w-full p-3 bg-gray-50 rounded-md border-2">
                                    <img className='w-full' src={blog.img} alt="car!" />
                                    <div className="py-3">
                                        <Link to={`/blog/${blog.link}`}>
                                            <h2 className="text-xl font-bold">{blog.title}</h2>
                                        </Link>
                                        <p className='py-3 text-justify'>{blog.text.slice(0, 150)}</p>
                                        <div className="card-actions justify-end">
                                            <Link to={`/blog/${blog.link}`}>
                                                <button className="btn btn-sm btn-primary">Read more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Home;