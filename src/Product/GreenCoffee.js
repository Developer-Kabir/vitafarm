import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';

const GreenCoffee = () => {

    const price = 1300;
    const pName = "Green Coffee";
    const TodaysDate = new Date().toLocaleDateString();
    const [confirmOrder, setconfirmOrder] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('https://vitafarm-server.onrender.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setconfirmOrder(true)
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
                <div className="grid card p-title mt-5 rounded-box place-items-center"><h1 className='text-3xl text-center font-bold p-5'>১৫ দিনে পুরো শরীরের ৫-৭ কেজি ওজন কমান কোনো ধরনের  Diet,  Excercise ছাড়াই 💯%</h1></div>
                <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                    <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>১৫০০ টাকা</s></h1>
                    <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১২০০ টাকা</h1>
                    <h1 className='text-3xl pp font-bold p-4'>সারাদেশে ডেলিভারি চার্জ ফ্রি</h1>
                </div>
                <div className="grid card p-title2 mt-5 rounded-box place-items-center"><h1 className='text-3xl font-bold p-5'><a href="#orderActive">অর্ডার করতে এখানে চাপুন এবং নিচের ফর্ম পূরন করুন</a></h1></div>
                <div class="grid my-5 lg:grid-cols-2 grid-cols-1 gap-4">
                    <div>
                        <img src="https://i.ibb.co/SRvvfvR/Untitled-design-6.png" alt='' className="img-fluid rounded-2xl shadow-2xl" />
                    </div>

                    <div> <img src="https://i.ibb.co/C6g8yfZ/Untitled-design-5.png" alt='' className="img-fluid rounded-2xl shadow-2xl" /></div>
                </div>

            </div>
            <div className="flex flex-col w-full">
                <div className="grid p-title card  rounded-box place-items-center"><h1 className="text-3xl font-bold p-5">গ্রীন কফি কেন খাবেন ?</h1></div>
                <div className="divider"></div>
                <div className="grid card bg-base-300 rounded-box px-12">
                    <li className='abc'>
                        🍀 পুরো শরীরের চর্বি কমিয়ে আকর্ষণীয় সুন্দর  করবে।</li>
                    <li className='abc'>
                        🍀 সুন্দর  ফিগার গরে তুলবে। </li>
                    <li className='abc'>🍀
                        খাবারকে দ্রুত হজম করবে। </li>
                    <li className='abc'>
                        🍀 রক্তে কোলেস্টরেল কমানোর পাশাপাশি ক্যান্সার সৃষ্টি হতে বাধা দেয়।</li>
                    <li className='abc'>🍀 ফ্যাট বার্ন করবে খুব  দ্রুতো। </li>
                    <li className='abc'>
                        🍀 নতুন চর্বি গঠন দমন করবে।</li>
                    <li className='abc'>
                        🍀 শরীরে পুষ্টি  বারাবে। ত্বক গ্লো করবে।</li>
                    <li className='abc'>
                        🍀 গ্যাস্টিক এর সমস্যা  সমাধান করবে। </li>
                    <li className='abc'>
                        🍀 মেদ ভুরি কমানোর সাথে ত্বককে ন্যাচারাল ভাবে আকর্ষণীয় করে।</li>

                </div>
            </div>
            <div className="grid card bg-base-300 mt-5 rounded-box place-items-center">
                <h1 className='text-3xl strick-title font-bold p-4'>পূর্ব মূল্য -- <s>১৫০০ টাকা</s></h1>
                <h1 className='text-3xl pp font-bold p-1'>বর্তমান মূল্য -- ১২০০ টাকা</h1>
                <h1 className='text-3xl pp font-bold p-4'>সারাদেশে ডেলিভারি চার্জ ফ্রি</h1>
            </div>
            <div className="flex my-10 flex-col w-full ">


                <div id='orderActive' className="card w-full bg-base-100 my-10" style={{ width: '90%', margin: 'auto', border: '1px solid #ddd' }}>
                    <h1 className="text-3xl strick-title font-bold py-5 px-12 text-center">অর্ডার করতে নিচের ফর্মটি পূরন করে <span className='dcf'>Submit Order</span> বাটনটি চাপুন</h1>
                    <div className="card-body">

                        {
                            (confirmOrder === false)
                                ?
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
                                : <div> <h1 className='text-2xl text-center'>আপনি সফল ভাবে অর্ডারটি করছেন, শীঘ্রই আমাদের প্রতিনিধি আপনাকে কল করে নিশ্চিত করবে</h1>
                                    <h3 className='text-xl text-center'>Thank Your For Your Order</h3>
                                </div>
                        }

                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>

        </div>
    );
};

export default GreenCoffee;