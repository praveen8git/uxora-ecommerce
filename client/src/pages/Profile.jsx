import axios from "axios";
import { Footer, Header, OrdersTable, PageTitle } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import IsAuthenticatedContext from "../contexts/IsAuthenticatedContext";
import { toast } from "react-toastify";

const { VITE_SERVER } = import.meta.env;

const Profile = () => {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({});
  const [myOrders, setMyOrders] = useState([]);

  const { user, isAuthenticated } = useContext(IsAuthenticatedContext);
  // console.log(user._id);

  /**
   * The function `fetchCustomer` asynchronously fetches customer data from a server using axios,
   * handles errors, and updates the customer state or navigates to a 404 page based on the response.
   */
  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/customer/${user._id}`, {
        withCredentials: true,
      });
      console.log("customer", response);
      response ?
        setCustomer({ ...response.data.customer })
        : navigate("/404")
    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
      if (error.response.status === 500) { navigate("/404") }
    }
  }

  /**
   * The function fetches the orders for a specific user from a server and handles any errors that may
   * occur during the process.
   */
  const fetchMyOrders = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/orders/${user._id}`, {
        withCredentials: true,
      });
      console.log("myOders", response);
      response ?
        setMyOrders(response.data.orders)
        : navigate("/404")
    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
      if (error.response.status === 500) { navigate("/404") }
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      console.log(user._id);
      fetchCustomer();
      fetchMyOrders();
    }
 }, [user, isAuthenticated, navigate]);

  return (
    <>
      <Header />
      <PageTitle title={'Profile'} />
      <section className='container-fluid mt-3 p-0'>
        <div className="row justify-content-end gap-3">
          <div className="col-2">
            <button onClick={() => navigate('/logout')} className="d-none d-sm-block btn btn-sm filter-btn border bag w-100 py-2 overflow-hidden">
              Log Out
            </button>
            <button onClick={() => navigate('/logout')} className="d-sm-none btn btn-sm filter-btn border bag w-100 overflow-hidden">
              <i className="ai ai-sign-out-fill"></i>
            </button>
            {/* <button className="btn btn-sm d-flex justify-content-center text-wrap filter-btn border bag w-100 py-2 overflow-hidden">
                  Log Out <i className="ai ai-sign-out-fill ms-2"></i>
                </button> */}
          </div>
        </div>
        <div className="d-flex flex-wrap gap-3 my-3">
          <div className="card">
            <div className="card-body p-4">
              <div className="row h-100 overflow-hidden">
                {/* <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50 rounded-circle"></div> */}
                {/* <img className='profile-picture rounded-circle object-fit-cover'
                  src="https://source.unsplash.com/random/500x500/?man,dp"
                  alt="Profile Picture" /> */}
                <label htmlFor="dp">
                  <img className='profile-picture rounded-circle object-fit-cover'
                    src={customer?.profilePicture}
                    alt="Profile Picture" />
                </label>
                <input type="file" className='visually-hidden' name="dp" id="dp" />
              </div>
            </div>
          </div>

          <div className="card flex-grow-1">
            <div className="p-5">
              <div className="mx-auto">
                <h3 className="card-headin font-color fs-1">
                  {/* Frederick C. Frazier */}{customer.fullName}
                </h3>
                <p className="card-text bag fs-6">
                  <span className="bag">Email: </span> {customer.email} <br />
                  <span className="bag">Phone: </span> {customer.phone} <br />
                  <span className="bag">Address: </span> {customer.address?.street} {customer.address?.city} {customer.address?.state} {customer.address?.pincode} {customer.address?.country}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3">
          {/* <div className="col-md-4 ">
            <div className="card container-fluid bg-colo h-100 ">
              <div className="card-body p-4">
                <div className="row h-100 overflow-hidden">
                  <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50 rounded-circle"></div>
                  <img className='profile-picture rounded-circle object-fit-cover'
                    src="https://source.unsplash.com/random/500x500/?man,dp"
                    alt="Profile Picture" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card container-fluid bg-colo h-100">
              <div className="card-body p-5">
                <div className="row h-100 p-5">
                  <h3 className="card-headin font-color fs-1">
                    Frederick C. Frazier
                  </h3>
                  <p className="card-text bag fs-5">
                    Email: Frederick@email.com <br />
                    Phone: +1 302 12387635
                    <address>Address: Vancouver, British Columbia, Canada</address>
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-sm-12">
            <OrdersTable orders={myOrders} />
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Profile
