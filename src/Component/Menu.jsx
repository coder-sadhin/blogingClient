import React from 'react';

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

const Menu = () => {
    return (
        <div>
            <div>
                <p className='md:text-2xl font-semibold pb-3'>Other post you me like</p>
                <div className='px-1'>
                    {
                        blogs.map((post, idx) =>
                            <div key={idx} className="pb-5">
                                <img src={post.img} alt="" />
                                <p className='text-justify py-2 font-semibold'>{post.title}</p>
                                <button className='btn w-full btn-sm btn-primary'>Read More</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Menu;