import axios from "axios";
import { useEffect, useLayoutEffect, useState } from "react";
import { OrdersTable } from "../../components";
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const Orders = () => {
  const [loading, setLoading] = useState();

  const [allOrders, setAllOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);

  const [selectedStatus, setSelectedStatus] = useState();

  /**
   * The function fetches all orders from the server and updates the state with the retrieved data
   * while handling loading states and error messages.
   */
  const fetchAllOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${VITE_SERVER}/api/admin/all-orders`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setAllOrders(response.data.allOrders);
        setFilteredOrders(response.data.allOrders);
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
   * The `deleteHandler` function is an asynchronous function that sends a delete request to a server
   * to delete an order by ID, updates the UI based on the response, and handles any errors that may
   * occur.
   */
  const deleteHandler = async (id) => {
    setLoading(true);

    try {

      const response = await axios.delete(`${VITE_SERVER}/api/admin/order/${id}`, {
        withCredentials: true,
      });
      console.log("deleteHandler", response.data);

      response.data.success ?
        toast.success("Order deleted successfully!", { className: "toastify" }) : null;

      setLoading(false);
      
      // remove product from table
      setFilteredOrders(prev => prev.filter(item => item._id != id ))

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllOrders();
    setFilteredOrders(allOrders)
    setSelectedStatus('all')
  }, []);

  // for orders filter
  useEffect(() => {
    /* for filtering the orders based on the `selectedStatus` state. */
    if (selectedStatus === 'all') {
      setFilteredOrders(allOrders)

    } else {
      setFilteredOrders(
        allOrders.filter(order => order.orderStatus === selectedStatus)
      )
    }
  }, [selectedStatus]);


  return (
    <main className='container-fluid mt-3'>
      <div className='row gap-3'>
        <div className="col-md-3 p-0">
          <div className="card container-fluid position-sticky top-0">
            <div className="card-body p-4">
              <div className="row h-100 ">

                <h3 className="card-heading font-color fs-6 text-uppercase">
                  Filters
                </h3>
                {/* <p className="text-center display-1 bag">
                  7
                </p> */}
                <div className="d-flex flex-column gap-3 my-5">
                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="all"
                    id="all"
                    checked={selectedStatus === "all"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="all">
                    All Orders
                  </label>

                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="processing"
                    id="processing"
                    checked={selectedStatus === "processing"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="processing">
                    Processing
                  </label>

                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="dispatched"
                    id="dispatched"
                    checked={selectedStatus === "dispatched"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="dispatched">
                    Dispatched
                  </label>

                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="onTheWay"
                    id="onTheWay"
                    checked={selectedStatus === "onTheWay"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="onTheWay">
                    On the way
                  </label>

                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="delivered"
                    id="delivered"
                    checked={selectedStatus === "delivered"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="delivered">
                    Delivered
                  </label>

                  <input type="radio"
                    className="btn-check"
                    name="status"
                    value="cancelled"
                    id="cancelled"
                    checked={selectedStatus === "cancelled"}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="cancelled">
                    Cancelled
                  </label>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col p-0">
          {loading ?
          (
            <div className="d-flex h-100 justify-content-center align-items-center">
              <span className="spinner-grow spinner-grow bag" aria-hidden="true"></span>
            </div>
          ):(
            <OrdersTable orders={filteredOrders} action deleteHandler={deleteHandler} />
          )}
        </div>
      </div>
    </main>
  )
}

export default Orders
