import React from 'react'
import { Link } from 'react-router-dom'

const OrdersTable = ({ orders, action, deleteHandler }) => {
    return (

        <div className="card container-fluid bg-colo h-100">
            <div className="card-body p-4">
                <div className="row h-100 ">
                    <h3 className="card-heading font-color fs-4 text-uppercase">
                        Orders
                    </h3>
                    <p className="card-text font-color fs-6">
                        Find all your oders and their status below. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="table-responsive">
                        <table className="order-table w-100">
                            <thead className='card-heading text-uppercase font-color fs-6 bag'>
                                <tr className='border-bottom border-warning border-opacity-10'>
                                    <th className='p-1'>#Order</th>
                                    <th>Fulfilment</th>
                                    <th>Payment</th>
                                    <th>Total</th>
                                    {action ? (<th>Action</th>) : null}
                                </tr>
                            </thead>
                            <tbody className='font-color fs-6'>
                                {   // check if there are orders present or not
                                    orders.length > 0 ? 
                                        (
                                            orders.map(order => (
                                                <tr key={order.orderId} className='border-bottom border-warning border-opacity-10'>
                                                    <td className='p-2'>{order.orderId}</td>
                                                    <td>{order.orderStatus}</td>
                                                    <td>{order.paymentStatus}</td>
                                                    <td>${order.total}.00</td>
                                                    {action ? (
                                                        <td>
                                                            <Link to={`${order._id}`} className='text-decoration-none me-3'>
                                                                <i className="ai ai-eye-fill action bag"></i>
                                                            </Link>
                                                            <Link
                                                                onClick={() => { deleteHandler(order._id) }}
                                                                className='text-decoration-none'>
                                                                <i className="ai ai-trash-fill action bag"></i>
                                                            </Link>
                                                        </td>
                                                    ) : null}
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td className='p-2'>No</td>
                                                <td>Orders</td>
                                                <td>Found</td>
                                                <td></td>
                                            </tr>
                                        )

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default OrdersTable
