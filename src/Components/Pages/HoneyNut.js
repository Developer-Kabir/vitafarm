import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify'

const HoneyNut = () => {
    const price = 1100;
    const pName = "HoneyNut";
    const TodaysDate = new Date().toLocaleDateString();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/order', {
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
                <div className="grid card p-title mt-5 rounded-box place-items-center"><h1 className='text-3xl font-bold p-5'>শারীরিক সমস্যার স্থায়ী সমাধান এই মধুময় বাদাম (সম্পূর্ণ প্রাকৃতিক ও পার্শ্বপ্রতিক্রিয়া মুক্ত)</h1></div>
                <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                    <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>১২০০ টাকা</s></h1>
                    <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১১০০ টাকা</h1>
                    <h1 className='text-3xl pp font-bold p-4'>সাড়াদেশে ডেলিভারি চার্জ ফ্রি</h1>
                </div>
                <div className="grid card p-title2 mt-5 rounded-box place-items-center"><h1 className='text-3xl font-bold p-5'>অর্ডার করতে নিচে চলে যান</h1></div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://i.ibb.co/jDpJBkQ/Untitled-design-10.png" alt='' className="max-w-md rounded-2xl shadow-2xl" />
                        <img src="https://i.ibb.co/1LDZLbG/Untitled-design-9.png" alt='' className="max-w-md rounded-2xl shadow-2xl" />

                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="grid p-title card  rounded-box place-items-center"><h1 className="text-3xl font-bold p-5">মধুময় বাদাম কেন খাবেন ?</h1></div>
                <div className="divider"></div>
                <div className="grid card bg-base-300 rounded-box px-12">
                    <li className='abc'>
                        🍀 শরীরে রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে অতুলনীয়।</li>
                    <li className='abc'>
                        🍀 পুরুষের শারীরিক শক্তি ও যৌন শক্তি বৃদ্ধি করে।</li>
                    <li className='abc'>🍀
                        চেহারায় লাবণ্য ধরে রাখতে খুবই কার্যকর।</li>
                    <li className='abc'>🍀 রক্তে কোলেস্টরেল কমানোর পাশাপাশি ক্যান্সার সৃষ্টি হতে বাধা দেয়।</li>
                    <li className='abc'>
                        🍀 হার্ট এটাক ও স্ট্রোকের আশংকা হ্রাস পায় ও মাইগ্রেন এবং উচ্চ রক্তচাপ নিয়ন্ত্রণ করে।</li>
                    <li className='abc'>
                        🍀 গর্ভবতী মায়েদের জন্য খুবই উপকারী।</li>
                    <li className='abc'>
                        🍀 ব্রণ প্রতিরোধ করে এবং দাঁতের ক্ষয় রোধ করে।</li>
                    <li className='abc'>
                        🍀 ওজন নিয়ন্ত্রন করে ও ওজন কমাতে সহায়তা করে।</li>
                    <li className='abc'>
                        🍀 গ্যাস্ট্রিক এর সমস্যা দূর করে।</li>
                </div>
            </div>
            <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>১২০০ টাকা</s></h1>
                <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১১০০ টাকা</h1>
                <h1 className='text-3xl pp font-bold p-4'>সাড়াদেশে ডেলিভারি চার্জ ফ্রি</h1>
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
                            <input type="hidden" value={TodaysDate}  {...register("date")}/>
                            <input type="hidden" value={pName}  {...register("productName")}/>
                            
                            <input type="hidden" value={price}  {...register("price")}/>
                            
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

export default HoneyNut;



