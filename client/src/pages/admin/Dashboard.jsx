import { useEffect, useState } from "react";
import axios from "axios";
import { Fade, Slide } from "react-awesome-reveal";

const { VITE_SERVER } = import.meta.env;

const Dashboard = () => {
  const [newCustomersCount, setNewCustomersCount] = useState(0);
  const [todaysOrderCount, setTodaysOrderCount] = useState(0);
  const [processingOrdersCount, setProcessingOrdersCount] = useState(0);
  const [todaysRevenue, setTodaysRevenue] = useState(0);
  const [totalCustomerCount, setTotalCustomerCount] = useState(0);
  const [totalOrderCount, setTotalOrderCount] = useState(0);
  const [cancelledOrdersCount, setCancelledOrdersCount] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  /**
   * The function `fetchNewCustomerCount` asynchronously fetches the count of new customers from a
   * server API endpoint and updates the count if the response is successful.
   */
  const fetchNewCustomerCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/new-customers`, {
        withCredentials: true,
      });
      if (response.data.success) setNewCustomersCount(response.data.newCustomersCount)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function `fetchTodaysOrderCount` asynchronously fetches today's order count from a server API
   * endpoint using axios in a React application.
   */
  const fetchTodaysOrderCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/todays-orders`, {
        withCredentials: true,
      });
      if (response.data.success) setTodaysOrderCount(response.data.todaysOrders)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * This function fetches the count of processing orders from a server using axios in a React
   * application.
   */
  const fetchProcessingOrdersCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/orders/processing`, {
        withCredentials: true,
      });
      if (response.data.success) setProcessingOrdersCount(response.data.orders)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function `fetchTodaysRevenue` asynchronously fetches today's revenue data from a server API
   * endpoint and sets the retrieved revenue value if the response is successful.
   */
  const fetchTodaysRevenue = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/todays-revenue`, {
        withCredentials: true,
      });
      // console.log(response.data);
      if (response.data.success) setTodaysRevenue(response.data.revenue)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function `fetchTotalCustomerCount` asynchronously fetches the total customer count from a
   * server API endpoint and updates the total customer count in the application state if the response
   * is successful.
   */
  const fetchTotalCustomerCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/total-customers`, {
        withCredentials: true,
      });
      if (response.data.success) setTotalCustomerCount(response.data.totalCustomers)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function `fetchTotalOrderCount` asynchronously fetches the total order count from a server API
   * endpoint and sets the count if the response is successful.
   */
  const fetchTotalOrderCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/total-orders`, {
        withCredentials: true,
      });
      if (response.data.success) setTotalOrderCount(response.data.totalOrders)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function fetches the count of cancelled orders from a server API endpoint using axios in a
   * React application.
   */
  const fetchCancelledOrdersCount = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/orders/cancelled`, {
        withCredentials: true,
      });
      if (response.data.success) setCancelledOrdersCount(response.data.orders)
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * The function fetches today's revenue data from the server and sets the total revenue if the
   * response is successful.
   */
  const fetchTotalRevenue = async () => {
    try {
      const response = await axios.get(`${VITE_SERVER}/api/admin/total-revenue`, {
        withCredentials: true,
      });
      // console.log(response.data);
      if (response.data.success) setTotalRevenue(response.data.revenue)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchNewCustomerCount();
    fetchTodaysOrderCount();
    fetchProcessingOrdersCount();
    fetchTodaysRevenue();
    fetchTotalCustomerCount();
    fetchTotalOrderCount();
    fetchCancelledOrdersCount();
    fetchTotalRevenue();

  }, [])

  return (
    <main>
      <section className="features container-fluid mt-3 p-0">
        <Fade cascade damping={0.2}>
          <div className="row g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">

                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        New Customers
                      </h3>
                      <p className="text-center display-1 bag">
                        {newCustomersCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={50} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        Today's Orders
                      </h3>
                      <p className="text-center display-1 bag">
                        {todaysOrderCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={100} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        Orders Processing
                      </h3>
                      <p className="text-center display-1 bag">
                        {processingOrdersCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={150} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        {'Today\'s Revenue ($)'}
                      </h3>
                      <p className="text-center display-3 bag">
                        {todaysRevenue}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </Fade>
      </section>
      <section className="features container-fluid mt-3 p-0">
        <Fade cascade damping={0.2}>
          <div className="row g-3">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">

                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        Total Customers
                      </h3>
                      <p className="text-center display-1 bag">
                        {totalCustomerCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>


            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={50} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        Total Orders
                      </h3>
                      <p className="text-center display-1 bag">
                        {totalOrderCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={100} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        Cancelled Orders
                      </h3>
                      <p className="text-center display-1 bag">
                        {cancelledOrdersCount}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={150} className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        {'Total Revenue ($)'}
                      </h3>
                      <p className="text-center display-3 bag">
                        {totalRevenue}
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </Fade>
      </section>
    </main>
  )
}

export default Dashboard
