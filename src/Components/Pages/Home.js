import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/k9z7S5h/Untitled-design-4.png" alt='' class="max-w-md rounded-2xl shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">মধুময় বাদাম</h1>
                        <p class="py-6">আপনি কি একজন স্বাস্থ্যসচেতন মানুষ?
                            আপনি কি হেলদি লাইফ মেইনটেইন করতে চান? তাহলে এই মিক্সড ফ্রুটস শুধুমাত্র আপনার জন্য।
                            আমাদের নিজহাতে প্রস্তুতকৃত এই রেসিপি ১৮ (+/-) ধরনের ড্রাইফ্রুট এবং প্রাকৃতিক মধুর সাথে সমপরিমাণে দিয়ে প্যাক করা। শুকনো ফলের সাথে মিশ্রিত প্রাকৃতিক মধুর রেসিপিটি পুষ্টিকর এবং সুস্বাদু, যা ভিটামিন, প্রোটিন, খনিজ এবং সমৃদ্ধ খাদ্য ফাইবার অন্তর্ভুক্ত।</p>
                        <Link to="/honeyNut" class="btn btn-primary">অর্ডার করতে বিস্তারিত পড়ুন</Link>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Qbgw2NR/Untitled-design-6.png" alt='' class="max-w-md rounded-2xl shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">গ্রীন কফি <span className='text-2xl font-bold'>(বিশ্বের দ্বিতীয় সর্বোচ্চ বিক্রিত পন্য)</span></h1>
                        <p class="py-6">কফি পান করার অনেক উপকারিতা রয়েছে। আর যদি গ্রিন কফি পান করেন সেই উপকারিতাগুলিই দ্বিগুণ হয়ে যাবে। আদতে কফির দানা একই। কফির দানা গাছ থেকে তুলে রোস্ট না করে যদি রোদে শুকনো করে দেয় তখন সেটা সবুজই থেকে যায়। সেটাই গ্রিন কফি নামে পরিচিত। কফি রোস্ট করার কারণে অনেক পুষ্টিগুণ নষ্ট হয়ে যায়। সেই ক্ষেত্রে গ্রিন কফি পান করা বেশি বুদ্ধিমানের কাজ হবে। যদিও সাধারণ কফি ও গ্রিন কফির মধ্যে বেশির ভাগ স্বাস্থ্য উপকারিতাই এক। কিন্তু ওজন কমানোর বিষয়ে গ্রিন কফি বেশি উপকারী।</p>
                        <Link to="/greenCoffee" class="btn btn-primary">অর্ডার করতে বিস্তারিত পড়ুন</Link>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/9gdQ0ms/Chia-Seed-Product.jpg" alt='' class="max-w-md rounded-2xl shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">চিয়া সীড</h1>
                        <p class="py-6">বীজ জাতীয় যেকোনো খাবারই স্বাস্থ্যের জন্য উপকারি। চিয়া সিডকে বলা হয় সুপারফুড। এতে আছে প্রচুর ওমেগা-৩ ফ্যাটি এসিড, কোয়েরসেটিন, কেম্পফেরল, ক্লোরোজেনিক অ্যাসিড ও ক্যাফিক এসিড নামক অ্যান্টিঅক্সিডেন্ট, পটাশিয়াম, ম্যাগনেশিয়াম, আয়রন, ক্যালসিয়াম এবং দ্রবণীয় ও অদ্রবণীয় খাদ্য আঁশ। বিআরবি হাসপাতাল লিমিটেডের ডায়েটেটিকস ডিপার্টমেন্টের প্রধান পুষ্টিবিদ সৈয়দা শিরিনা স্মৃতি দ্য ডেইলি স্টারকে বলেন, 'চিয়া সিড একটি অত্যন্ত পুষ্টিকর খাবার ৷</p>
                        <Link to="/chiaSeed" class="btn btn-primary">অর্ডার করতে বিস্তারিত পড়ুন</Link>
                    </div>
                </div>
            </div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/B23m0V1/Untitled-design-13.png" alt='' class="max-w-md rounded-2xl shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">মরিঙ্গা পাউডার <span className='text-2xl font-bold'>(নিউট্রিএশন সুপার ফুড)</span></h1>
                        <p class="py-6">পুষ্টিকর খাবারদাবারের তালিকায় যেগুলি রয়েছে, বিদেশে সেগুলিকে 'সুপারফুডস' বলা হয়। বিদেশি যে কোনও সুপারফুডকে টেক্কা দিতে পারে দেশি সজনেপাতা। সজনে পাতা থেকে তৈরি হয় মারিঙ্গা। ভারতের চিরাচরিত খাবারদাবারের একটা অঙ্গ হল এই পাতা। সজনে গাছকের অংশে উপকারিতা আছে বলে এই এটিকে একটি অলৌকিক গাছ বলা হয়। মানুষের শরীরে আটটি অতিপ্রয়োজনীয় অ্যামিনো অ্যাসিড দরকার। মরিঙ্গাতে এই আটটি অ্যামিনো অ্যাসিড রয়েছে। </p>
                        <Link to="/moringa" class="btn btn-primary">অর্ডার করতে বিস্তারিত পড়ুন</Link>
                    </div>
                </div>
            </div>

            <div class="flex flex-col w-full">
                <div class="grid  card bg-base-300 rounded-box place-items-center"><h1 class="text-5xl font-bold py-5 px-12">ভিটাফার্ম থেকে কেন কিনবেন ?</h1></div>
                <div class="divider"></div>
                <div class="grid card bg-base-300 rounded-box px-12">
                    <li className='abc'>
                    🍀 আমরা চেষ্টা করছি বাজারের সেরা কোয়ালিটি নিশ্চিত করার</li>
                    <li className='abc'>
                    🍀 প্রোডাক্ট অর্ডার করতে কোনো অগ্রিম টাকা নেওয়া হয় না।</li>
                    <li className='abc'>🍀 প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার সুবিধা।</li>
                    <li className='abc'>🍀 কোয়ালিটি যাচাই করে বিন্দুমাত্র ভেজাল প্রমান করতে পারলে, সাথে সাথে পণ্য ফেরত দিয়ে দিবেন।</li>
                    <li className='abc'>
                    🍀 সারাদেশে ইউনিয়ন পর্যায়ে ফ্রী হোম ডেলিভারির সুবিধা রয়েছে।</li>
                </div>
            </div>
        </div>
    );
};

export default Home;