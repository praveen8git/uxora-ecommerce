import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const OrderDetails = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState();
    const [order, setOrder] = useState({});

    const [selectedStatus, setSelectedStatus] = useState();

    let { id } = useParams();
   /**
    * The fetchOrder function is an asynchronous function that fetches order data from a server using
    * axios, updates state based on the response, and handles loading and error states.
    */
    const fetchOrder = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`${VITE_SERVER}/api/admin/order/${id}`, {
                withCredentials: true,
            });
            console.log(response.data);
            if (response.data.success) {
                setOrder(response.data.order);
                setSelectedStatus(response.data.order.orderStatus)
            }

            setLoading(false);

        } catch (error) {
            console.error(error);
            error.message ? toast.error(error.message, { className: "toastify" }) : null
        } finally {
            setLoading(false);
        }
    }

    /**
     * The `deleteHandler` function sends a DELETE request to the server to delete an order, displaying
     * success or error messages accordingly.
     */
    const deleteHandler = async (id) => {
        setLoading(true);

        try {

            const response = await axios.delete(`${VITE_SERVER}/api/admin/order/${id}`, {
                withCredentials: true,
            });
            console.log("deleteHandler", response.data);

            response.data.success ?
                toast.success("Order has been deleted", { className: "toastify" }) : null;

            setLoading(false);

            // navigate back to order list
            navigate('/admin/orders');

        } catch (error) {
            console.error(error);
            error.message ? toast.error(error.message, { className: "toastify" }) : null;
        } finally {
            setLoading(false);
        }
    }

    /**
     * The function `updateOrder` is an asynchronous function that sends a PATCH request to update the
     * status of an order and handles the response accordingly.
     */
    const updateOrder = async () => {
        let patch = {
            status: selectedStatus
        }
        try {
            setLoading(true);
            const response = await axios.patch(`${VITE_SERVER}/api/admin/order/${id}`, patch, {
                withCredentials: true,
            });

            console.log(response.data);
            if (response.data.success) {
                setSelectedStatus(response.data.updatedOrder.orderStatus);
                toast.success("Order has been Updated", { className: "toastify" })
            }

            setLoading(false);

        } catch (error) {
            console.error(error);
            error.message ? toast.error(error.message, { className: "toastify" }) : null
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchOrder();
    }, [])

    return (
        <main className="container py-3">
            {/* <!-- Title  --> */}
            <h1 className="title text-uppercase text-center mt-5">Order #{order?.orderId}</h1>
            <h5 className="text-uppercase text-center mb-5">
                {/* Checkout */}
            </h5>
            <div className="row g-3">
                <div className="col-sm-7">
                    {/* <!-- Bag Items section  --> */}
                    <div className="card container-fluid p-3 mb-3">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col">
                                    <h2 className="card-heading text-uppercase fs-4 font-color">
                                        Items in Bag
                                    </h2>
                                    {/* <!-- Products  --> */}
                                    {
                                        order?.products?.map(item => (
                                            <BagItem key={item.product._id} {...item.product} quantity={item.quantity} />
                                        ))
                                    }

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Customer Info for sign up */}
                    <div className="card container-fluid p-3 mb-3">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col">
                                    <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                                        Customer Info
                                    </h2>

                                    <label htmlFor="fullName" className="font-color product-card-price mb-1">Full Name *</label>
                                    <input type="text"
                                        className="login-input font-color d-block w-100 mb-2"
                                        id="fullName"
                                        name="fullName"
                                        value={order?.orderBy?.fullName || ""}
                                        readOnly
                                    />


                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="email" className="font-color product-card-price mb-1">Email *</label>
                                            <input type="email"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="email"
                                                name="email"
                                                value={order?.orderBy?.email || ""}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="phone" className="font-color product-card-price mb-1">Phone *</label>
                                            <input type="tel"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="phone"
                                                name="phone"
                                                value={order?.orderBy?.phone || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="password" className="font-color product-card-price mb-1">Password *</label>
                                            <input type="password"
                                                className="login-input font-color d-block w-100"
                                                id="password"
                                                name="password"
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="confirmPassword" className="font-color product-card-price mb-1">Confirm Password *</label>
                                            <input type="password"
                                                className="login-input font-color d-block w-100"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                placeholder=""
                                                required />
                                        </div>
                                    </div> */}


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping address */}
                    <div className="card container-fluid p-3 mb-3">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col">
                                    <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                                        Shipping Address
                                    </h2>

                                    <label htmlFor="street" className="font-color product-card-price mb-1">Street Address *</label>
                                    <input type="text"
                                        className="login-input font-color d-block w-100 mb-2"
                                        id="street"
                                        name="street"
                                        value={order?.shippingAddress?.street || ""}
                                        readOnly
                                    />

                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="city" className="font-color product-card-price mb-1">City *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="city"
                                                name="city"
                                                value={order?.shippingAddress?.city || ""}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="state" className="font-color product-card-price mb-1">State *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="state"
                                                name="state"
                                                value={order?.shippingAddress?.state || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>
                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="pincode" className="font-color product-card-price mb-1">Pincode *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="pincode"
                                                name="pincode"
                                                value={order?.shippingAddress?.pincode || ""}
                                                readOnly
                                            />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="country" className="font-color product-card-price mb-1">Country *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="country"
                                                name="country"
                                                value={order?.shippingAddress?.country || ""}
                                                readOnly
                                            />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment */}
                    {/* <div className="card container-fluid p-3 mb-3">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col">
                                    <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                                        Payment Info
                                    </h2>

                                    <label htmlFor="cardNumber" className="font-color product-card-price mb-1">Card Number *</label>
                                    <input type="number"
                                        className="login-input font-color d-block w-100 mb-2"
                                        id="cardNumber"
                                        name="cardNumber"
                                        placeholder=""
                                        required />

                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="expiry" className="font-color product-card-price mb-1">Expiry Date *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="expiry"
                                                name="expiry"
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="security" className="font-color product-card-price mb-1">Security Code *</label>
                                            <input type="password"
                                                className="login-input font-color d-block w-100"
                                                id="security"
                                                name="security"
                                                placeholder=""
                                                required />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div> */}


                </div>

                {/* <!-- Order Summery Section  --> */}

                <div className="col-sm-5">
                    <div className="card container-fluid p-3 position-sticky top-0">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col">
                                    <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                                        Order Summary
                                    </h2>
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Subtotal:</span>
                                        <span className="product-card-price font-color mb-0">$ {order?.subTotal}.00 USD</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Shipping fee:</span>
                                        <span className="product-card-price font-color mb-0">$ {order?.shippingFees}.00 USD</span>
                                    </div>
                                    <hr className="font-color" />
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Total:</span>
                                        <span className="product-card-price font-color mb-0">$ {order?.total}.00 USD</span>
                                    </div>
                                    <hr className="font-color" />
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Payment Status:</span>
                                        <span className="product-card-price font-color mb-0">{order?.paymentStatus}</span>
                                    </div>

                                    <div className="d-flex justify-content-center w-100 gap-3">
                                        <div className="d-flex flex-column flex-wrap gap-3 my-5">
                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="processing"
                                                value="processing"
                                                checked={selectedStatus === "processing"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="processing">
                                                Processing
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="dispatched"
                                                value="dispatched"
                                                checked={selectedStatus === "dispatched"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="dispatched">
                                                Dispatched
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="cancelled"
                                                value="cancelled"
                                                checked={selectedStatus === "cancelled"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="cancelled">
                                                Cancelled
                                            </label>

                                        </div>
                                        <div className="d-flex flex-column flex-wrap gap-3 my-5">

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="onTheWay"
                                                value="onTheWay"
                                                checked={selectedStatus === "onTheWay"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="onTheWay">
                                                Shipping
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="delivered"
                                                value="delivered"
                                                checked={selectedStatus === "delivered"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="delivered">
                                                Delivered
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="returned"
                                                value="returned"
                                                checked={selectedStatus === "returned"}
                                                onChange={(e) => setSelectedStatus(e.target.value)}
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="returned">
                                                Returned
                                            </label>

                                        </div>

                                    </div>


                                    <div className="contact-form">
                                        <button
                                            className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold"
                                            style={{ fontSize: 0.88 + 'rem' }}
                                            onClick={() => updateOrder(id)}
                                            disabled={loading}>
                                            {
                                                loading ? (
                                                    <>
                                                        <span className="spinner-grow spinner-grow-sm text-dark me-2" aria-hidden="true"></span>
                                                        <span role="status">Updating...</span>
                                                    </>
                                                ) : "Update Order"
                                            }
                                        </button>
                                    </div>
                                    <button
                                        className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold bg-color border bag hover-text-primary"
                                        style={{ fontSize: 0.88 + 'rem' }}
                                        onClick={() => deleteHandler(id)}
                                        disabled={loading}>
                                        {
                                            loading ? (
                                                <>
                                                    <span className="spinner-grow spinner-grow-sm text-dark me-2" aria-hidden="true"></span>
                                                    <span role="status">Deleting...</span>
                                                </>
                                            ) : "Delete Order"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

const BagItem = ({ image, productName, quantity, salePrice }) => {

    // const { increaseQuantity, decreaseQuantity, removeFromBag } = useContext(BagContext);

    return (
        <div className="row mt-4 g-3">
            <div className="col-sm-2">
                <div className="bag-image position-relative overflow-hidden h-100">
                    <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                    <img className="object-fit-cover w-100 h-100" src={image} alt="bag item" />
                    {/* "https://cdn.prod.website-files.com/63cffb7c16ab33a28e9734f2/63d4f225026df869f409bbcc_product-01-thumb-p-500.webp" */}
                </div>
            </div>
            <div className="col">
                <h5 className="item-name card-heading font-color fs-5 mb-0">{productName}</h5>
                <p className="product-card-price font-color mb-0">$ {salePrice}.00 USD x {quantity}</p>

                {/* <Link onClick={() => { removeFromBag(id) }} className="bag text-decoration-none text-center">
                    <i className="ai ai-trash-fill fs-5"></i>
                </Link> */}
            </div>
            {/* <div className="col-sm-3 col-md-4 d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <Link onClick={() => { decreaseQuantity(id) }} className="bag text-decoration-none mx-2">
                        <i className="ai ai-minus-fill fs-4"></i>
                    </Link>
                    <input className="login-input w-50 text-center font-color "
                        style={{ minHeight: 2.2 + 'rem', padding: 0.3 + 'rem' }}
                        type="number"
                        name="quantity"
                        id={useId()}
                        value={quantity}
                        min={1}
                        readOnly />
                    <Link onClick={() => { increaseQuantity(id) }} className="bag text-decoration-none mx-2">
                        <i className="ai ai-plus-fill fs-4"></i>
                    </Link>
                </div>
            </div> */}
        </div>
    )
}

export default OrderDetails
