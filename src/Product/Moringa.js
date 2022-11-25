import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const Moringa = () => {


    const price = 1500;
    const pName = "Moringa";
    const TodaysDate = new Date().toLocaleDateString();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://vitfarm-backend.vercel.app/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast(` আপনি সফল ভাবে অর্ডারটি করছেন, শীঘ্রই আমাদের প্রতিনিধি আপনাকে কল করে নিশ্চিত করবে`)
                }
                else {
                    toast.error(`আপনার অর্ডার করতে সমস্যা হয়েছে দয়া করে ফর্মটি ভালো করে পূরণ করুন`)
                }

            })
    };
    console.log(errors);



    return (
        <div>
            <div className="flex flex-col w-full">
                <div className="grid card p-title mt-5 rounded-box place-items-center"><h1 className='text-3xl text-center font-bold p-5'>উপকারিতার দিক থেকে বিদেশি সুপারফুডকে টেক্কা দিচ্ছে মরিঙ্গা</h1></div>
                <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                    <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>২০০০ টাকা</s></h1>
                    <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১৫০০ টাকা</h1>
                    <h1 className='text-3xl pp font-bold p-4'>সারাদেশে ডেলিভারি চার্জ ফ্রি</h1>
                </div>
                <div className="grid card p-title2 mt-5 rounded-box place-items-center"><h1 className='text-3xl font-bold p-5'>অর্ডার করতে নিচে চলে যান</h1></div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/B23m0V1/Untitled-design-13.png" alt='' className="max-w-md rounded-2xl shadow-2xl" />
                        <img src="https://i.ibb.co/jWn6ghD/Untitled-design-12.png" alt='' className="max-w-md rounded-2xl shadow-2xl" />

                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid p-title card  rounded-box place-items-center"><h1 className="text-3xl font-bold p-5">মরিঙ্গা কেন খাবেন ?</h1></div>
                <div className="divider"></div>
                <div className="grid card bg-base-300 rounded-box px-12">
                    <li className='abc'>
                        🍀 পুষ্টির আধার বলে সুপরিচিত এই পাতার গুঁড়া দেহে শক্তির যোগান দেয়।</li>
                    <li className='abc'>
                        🍀 রাতে ঘুমানোর আগে সজিনা পাতার গুঁড়া বেশ উপকারী। এটি ভালো ঘুমের জন্য সহায়ক।</li>
                    <li className='abc'>🍀
                    এতে বিদ্যমান পুষ্টি উপাদানগুলো দেহের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধি করে বহুলাংশে।</li>
                    <li className='abc'>🍀 এটি অ্যান্টিঅক্সিডেন্ট এর চমৎকার উৎস। এতে বিদ্যমান অ্যান্টিঅক্সিডেন্ট গুণাবলি অকাল বার্ধক্য প্রতিরোধে ভূমিকা রাখে।</li>
                    <li className='abc'>
                        🍀  নারীদের ঋতুস্রাবকালীন সময়ে বেশ কার্যকরী ভূমিকা রাখে।</li>
                    <li className='abc'>
                        🍀 ওজন কমাতে এটি এক নতুন মাত্রা যোগ করে।</li>
                    <li className='abc'>
                        🍀 ডায়াবেটিস নিয়ন্ত্রণে এর ভূমিকা অপরিসীম।</li>
                    <li className='abc'>
                        🍀 ক্যান্সারের বিরুদ্ধে কার্যকরী ভূমিকা রাখে।</li>
                    <li className='abc'>
                        🍀 এসজিনা পাতার গুঁড়া উষ্ণ পানীয় হিসবে গ্রহণে সাইনাসের সমস্যার উপশম হয়।</li>
                    <li className='abc'>
                        🍀 কোলেস্টেরলের মাত্রা নিয়ন্ত্রণে রাখতে দারুন কাজ করে এই সজিনা পাতার গুঁড়া।</li>
                </div>

            </div>
            <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>২০০০ টাকা</s></h1>
                <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১৫০০ টাকা</h1>
                <h1 className='text-3xl pp font-bold p-4'>সারাদেশে ডেলিভারি চার্জ ফ্রি</h1>
            </div>
            <div className="flex my-10 flex-col w-full ">


                <div className="card w-full bg-base-100 my-10" style={{ width: '90%', margin: 'auto', border: '1px solid #ddd' }}>
                    <h1 className="text-3xl strick-title font-bold py-5 px-12 text-center">অর্ডার করতে নিচের ফর্মটি পূরন করে <span className='dcf'>Submit Order</span> বাটনটি চাপুন</h1>
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">নামঃ</span>
                                </label>
                                <input type="text" placeholder="আপনার নাম লিখুন" className="input input-bordered" {...register("name")} />
                            </div>
                            <div className="form-control">
                                <label className="label font-bold">
                                    <span className="label-text">মোবাইল নাম্বারঃ</span>
                                </label>
                                <input type="text" placeholder="আপনার মোবাইল নাম্বার লিখুন" className="input input-bordered" {...register("phoneNumber", { required: true })} />
                                <label className="label">
                                    <span className="label-text-alt text-red-800"> {errors.phoneNumber && <span>নাম্বার অবশ্যই লিখতে হবে</span>}</span>
                                </label>

                            </div>
                            <input type="hidden" value={TodaysDate}  {...register("date")} />
                            <input type="hidden" value={pName}  {...register("productName")} />

                            <input type="hidden" value={price}  {...register("price")} />

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">ঠিকানাঃ</span>
                                </label>
                                <textarea rows="" className="input input-bordered" cols="" placeholder="আপনার ঠিকানা লিখুন"
                                    {...register("address", { required: true })}
                                ></textarea>
                                <label className="label">
                                    <span className="label-text-alt text-red-800">{errors.address && <span>ঠিকানা অবশ্যই লিখতে হবে</span>}</span>
                                </label>

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary text-2xl">Submit Order</button>
                            </div>

                        </form>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default Moringa;