import React, { useEffect, useState } from 'react';

const Order = () => {

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        fetch('https://vitfarm-backend.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])


    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead className='table-title'>
                        <tr>
                            <th></th>
                            <th>নাম</th>
                            <th>নাম্বার</th>
                            <th>ঠিকানা</th>
                            <th>তারিখ</th>
                            <th>পন্যের নাম</th>
                            <th>মূল্য</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.reverse().map((order, index)=>
                            <tr key={index}>
                            <th>{index+1}</th>
                            <td>{order.name}</td>
                            <td>{order.phoneNumber}</td>
                            <td>{order.address}</td>
                            <td>{order.date}</td>
                            <td>{order.productName}</td>
                            <td>{order.price}</td>
                        </tr>

                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Order;