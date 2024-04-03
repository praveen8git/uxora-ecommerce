import { BagItem } from "../Bag"

const OrderDetails = () => {
    return (
        <main className="container py-3">
            {/* <!-- Title  --> */}
            <h1 className="title text-uppercase text-center mt-5">Order #232</h1>
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
                                    <BagItem />
                                    <BagItem />

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
                                        placeholder=""
                                        required />


                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="email" className="font-color product-card-price mb-1">Email *</label>
                                            <input type="email"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="email"
                                                name="email"
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="phone" className="font-color product-card-price mb-1">Phone *</label>
                                            <input type="tel"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="phone"
                                                name="phone"
                                                placeholder=""
                                                required />
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
                                        placeholder=""
                                        required />

                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="city" className="font-color product-card-price mb-1">City *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="city"
                                                name="city"
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="state" className="font-color product-card-price mb-1">State *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="state"
                                                name="state"
                                                placeholder=""
                                                required />
                                        </div>
                                    </div>
                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="pincode" className="font-color product-card-price mb-1">Pincode *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="pincode"
                                                name="pincode"
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="country" className="font-color product-card-price mb-1">Country *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="country"
                                                name="country"
                                                placeholder=""
                                                required />
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
                                        <span className="product-card-price font-color mb-0">$ 204.00 USD</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Shipping fee:</span>
                                        <span className="product-card-price font-color mb-0">$ 6.00 USD</span>
                                    </div>
                                    <hr className="font-color" />
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Total:</span>
                                        <span className="product-card-price font-color mb-0">$ 210.00 USD</span>
                                    </div>
                                    <hr className="font-color" />
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Payment Status:</span>
                                        <span className="product-card-price font-color mb-0">Paid</span>
                                    </div>

                                    <div className="d-flex justify-content-center w-100">
                                        <div className="d-flex flex-column flex-wrap gap-3 my-5">
                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="processing"
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="processing">
                                                Processing
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="dispatched"
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="dispatched">
                                                Dispatched
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="cancelled"
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
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="onTheWay">
                                                On the way
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="delivered"
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="delivered">
                                                Delivered
                                            </label>

                                            <input type="radio"
                                                className="btn-check"
                                                name="fulfilment"
                                                id="returned"
                                                autoComplete="off" />
                                            <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="returned">
                                                Returned
                                            </label>

                                        </div>

                                    </div>


                                    <div className="contact-form">
                                        <button className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold" style={{ fontSize: 0.88 + 'rem' }}>Update Order</button>
                                    </div>
                                    <button className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold bg-color border bag hover-text-primary" style={{ fontSize: 0.88 + 'rem' }}>Delete Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default OrderDetails
