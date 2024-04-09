import axios from "axios";
import { OrdersTable } from "../../components"
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useState } from "react";
import { toast } from "react-toastify";

const { VITE_SERVER } = import.meta.env;

const CustomerDetails = () => {

  const navigate = useNavigate();

  const [customer, setCustomer] = useState();
  const [orders, setOrders] = useState([]);

  let { id } = useParams();
  /**
   * The function fetches customer data from a server using an async request and handles errors
   * appropriately.
   */
  const fetchCustomer = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/customer/${id}`, {
        withCredentials: true,
      });
      // console.log("customer", response.data.customer);
      response ?
        setCustomer({ ...response.data.customer })
        : navigate("/404")
      console.log(customer);
    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
      if (error.response.status === 500) { navigate("/404") }
    }
  }

  /**
   * The function `fetchOrders` is an asynchronous function that fetches orders from a server using
   * axios, handles the response data, and navigates to a 404 page if there is an error.
   */
  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/orders/${id}`, {
        withCredentials: true,
      });
      console.log("Oders", response);
      response ?
        setOrders(response.data.orders)
        : navigate("/404")
    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
      if (error.response.status === 500) { navigate("/404") }
    }
  }

  /**
   * The `deleteHandler` function is an asynchronous function that sends a delete request to the server
   * to delete a customer by ID, with error handling and toast notifications.
   */
  const deleteHandler = async (id) => {
    setLoading(true);

    try {

      const response = await axios.delete(`${VITE_SERVER}/api/admin/delete-customer/${id}`, {
        withCredentials: true,
      });
      console.log("deleteHandler", response.data);

      response.data.success ?
        toast.success("Customer deleted successfully!", { className: "toastify" }) : null;

      setLoading(false);

      // remove product from table
      setAllCustomers.filter(item => item._id != id)

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCustomer();
    fetchOrders();
  }, [])

  return (
    <section className='container-fluid mt-3 p-0'>
      <div className="row justify-content-end gap-3">
        <div className="col-2">
          <button
            onClick={() => { deleteHandler(customer._id) }}
            className="d-none d-sm-block btn btn-sm filter-btn border bag w-100 overflow-hidden">
            Delete Account
          </button>
          <button className="d-sm-none btn btn-sm filter-btn border bag w-100 overflow-hidden">
            <i className="ai ai-trash-fill"></i>
          </button>
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
                {customer?.fullName}
              </h3>
              <p className="card-text bag fs-6">
                <span className="bag">Email: </span> {customer?.email} <br />
                <span className="bag">Phone: </span> {customer?.phone} <br />
                <span className="bag">Address: </span> {customer?.address.street} {customer?.address.city}, {customer?.address.state}, {customer?.address.pincode} {customer?.address.country}
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
          <OrdersTable orders={orders} />
        </div>
      </div>

    </section>
  )
}

export default CustomerDetails
