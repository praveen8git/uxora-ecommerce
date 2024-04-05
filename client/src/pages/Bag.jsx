import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import BagContext from "../contexts/BagContext";
import IsAuthenticatedContext from "../contexts/IsAuthenticatedContext";
import { toast } from "react-toastify";

const { VITE_SERVER } = import.meta.env;

const BagItem = ({ id, image, productName, quantity, salePrice }) => {

    const deleteItem = () => {

    }

    const { increaseQuantity, decreaseQuantity, removeFromBag } = useContext(BagContext);

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

                <Link onClick={() => { removeFromBag(id) }} className="bag text-decoration-none text-center">
                    <i className="ai ai-trash-fill fs-5"></i>
                </Link>
            </div>
            <div className="col-sm-3 col-md-4 d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <Link onClick={() => { decreaseQuantity(id) }} className="bag text-decoration-none mx-2">
                        <i className="ai ai-minus-fill fs-4"></i>
                    </Link>
                    <input className="login-input w-50 text-center font-color "
                        style={{ minHeight: 2.2 + 'rem', padding: 0.3 + 'rem' }}
                        type="number"
                        name="quantity"
                        id="quantity"
                        value={quantity}
                        min={1}
                        readOnly />
                    <Link onClick={() => { increaseQuantity(id) }} className="bag text-decoration-none mx-2">
                        <i className="ai ai-plus-fill fs-4"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const Bag = () => {
    const [loading, setLoading] = useState();

    // check if customer is logged in
    const { isAuthenticated, user } = useContext(IsAuthenticatedContext);

    // use bag context to get all items of the bag
    const { bagItems } = useContext(BagContext);
    console.log(bagItems);

    // creating states for order summery
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const shippingFees = 6;

    const [formData, setFormData] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const placeOrder = async () => {
        const payload = {
            ...formData,
            shippingFees,
            subTotal,
            total,
            orderBy: user
        }

        try {
            const response = await axios.post(VITE_SERVER + "/api/place-order", payload, {
                withCredentials: true,
            });
            console.log(response.data);
            toast.success("Order Placed Successfully!",  {className: "toastify", autoClose: 6000})
        } catch (error) {
            console.error(error);
            toast.error("Couldn't place order due to a Error")
        }
    }

    // when bagItems changes, it multiply price of each item with it's quantity using map method and then adds up all using reduce method, and set the value of subtotal
    useEffect(() => {
        setSubTotal(
            bagItems.map(item => item.salePrice * item.quantity).reduce((a, b) => a + b)
        );
    }, [bagItems])

    // when subtotal changes we update the value of total by adding shipping fees to the latest subtotal amount
    useEffect(() => {
        setTotal(
            subTotal + shippingFees
        )
    }, [subTotal])



    return (
        <form className="container py-3" onSubmit={placeOrder}>
            {/* <!-- Title  --> */}
            <h1 className="title text-uppercase text-center mt-5">Your Bag</h1>
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
                                        bagItems.length > 0 ?
                                            bagItems.map(item => (<BagItem key={item.id} {...item} />)) : "No Item in Bag"
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
                                        onChange={(e) => onChangeHandler(e)}
                                        placeholder=""
                                        required />


                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="email" className="font-color product-card-price mb-1">Email *</label>
                                            <input type="email"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="email"
                                                name="email"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="phone" className="font-color product-card-price mb-1">Phone *</label>
                                            <input type="tel"
                                                className="login-input font-color d-block w-100 mb-2"
                                                id="phone"
                                                name="phone"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required />
                                        </div>
                                    </div>

                                    <div className={`row gap-3 px-2 ${isAuthenticated ? 'd-none' : ''}`}>
                                        <div className="col-md p-0">
                                            <label htmlFor="password" className="font-color product-card-price mb-1">Password *</label>
                                            <input type="password"
                                                className="login-input font-color d-block w-100"
                                                id="password"
                                                name="password"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required={!isAuthenticated} />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="confirmPassword" className="font-color product-card-price mb-1">Confirm Password *</label>
                                            <input type="password"
                                                className="login-input font-color d-block w-100"
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required={!isAuthenticated} />
                                        </div>
                                    </div>


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
                                        onChange={(e) => onChangeHandler(e)}
                                        placeholder=""
                                        required />

                                    <div className="row gap-3 px-2">
                                        <div className="col-md p-0">
                                            <label htmlFor="city" className="font-color product-card-price mb-1">City *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="city"
                                                name="city"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="state" className="font-color product-card-price mb-1">State *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="state"
                                                name="state"
                                                onChange={(e) => onChangeHandler(e)}
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
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required />
                                        </div>
                                        <div className="col-md p-0">
                                            <label htmlFor="country" className="font-color product-card-price mb-1">Country *</label>
                                            <input type="text"
                                                className="login-input font-color d-block w-100"
                                                id="country"
                                                name="country"
                                                onChange={(e) => onChangeHandler(e)}
                                                placeholder=""
                                                required />
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment */}
                    <div className="card container-fluid p-3 mb-3">
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
                    </div>


                </div>

                {/* <!-- Order Summery Section  --> */}

                <div className="col-sm-5">
                    <div className="card container-fluid p-3 position-sticky top-0">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col contact-form">
                                    <h2 className="card-heading text-uppercase fs-4 font-color mb-4">
                                        Order Summary
                                    </h2>
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Subtotal:</span>
                                        <span className="product-card-price font-color mb-0">$ {subTotal}.00 USD</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Shipping fee:</span>
                                        <span className="product-card-price font-color mb-0">$ {shippingFees}.00 USD</span>
                                    </div>
                                    <hr className="font-color" />
                                    <div className="d-flex justify-content-between">
                                        <span className="product-card-price font-color mb-0">Total:</span>
                                        <span className="product-card-price font-color mb-0">$ {total}.00 USD</span>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold"
                                        style={{ fontSize: 0.88 + 'rem' }}
                                        disabled={loading}>
                                        {
                                            loading ? (
                                                <>
                                                    <span class="spinner-grow spinner-grow-sm text-dark me-2" aria-hidden="true"></span>
                                                    <span role="status">Placing...</span>
                                                </>
                                            ) : "Place Oder"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Bag
export { BagItem }
