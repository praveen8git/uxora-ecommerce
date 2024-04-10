import axios from 'axios';
import { Link } from "react-router-dom"
import { PageTitle } from "../../components"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const Customers = () => {
  const [loading, setLoading] = useState();

  const [allCustomers, setAllCustomers] = useState([]);

  /**
   * The function `fetchAllCustomers` fetches all customers from a server using axios in a React
   * application.
   */
  const fetchAllCustomers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${VITE_SERVER}/api/admin/all-customers`, {
        withCredentials: true,
      });
      console.log("all-customers", response.data.allCustomers);
      setAllCustomers(response.data.allCustomers)
      setLoading(false);

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null
    } finally {
      setLoading(false);
    }
  }

  /**
   * The `deleteHandler` function is an asynchronous function that sends a delete request to the server
   * to delete a customer, handles the response, and updates the UI accordingly.
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
      setAllCustomers(prev => prev.filter(item => item._id != id ))

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllCustomers();
  }, [])


  return (
    <>
      {/* <PageTitle title={"Products"} /> */}
      <section className='container-fluid mt-3'>
        <div className="row gap-3">
          <div className="col p-0">
            <div className="card container-fluid bg-colo h-100">
              <div className="card-body p-4">
                <div className="row h-100 ">
                  <h3 className="card-heading font-color fs-4 text-uppercase">
                    Customers
                  </h3>
                  <p className="card-text font-color fs-6">
                    Find all your customers and their details below. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="table-responsive">
                    {
                      loading ? (
                        <div className="d-flex h-100 justify-content-center align-items-center">
                          <span className="spinner-grow spinner-grow bag" aria-hidden="true"></span>
                        </div>
                      ) : (
                        allCustomers.length > 0 ? (
                          <>
                            <table className="order-table w-100" >
                              <thead className='card-heading text-uppercase font-color fs-6 bag'>
                                <tr className='border-bottom border-warning border-opacity-10'>
                                  <th className='p-1'>#</th>
                                  <th></th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Pincode</th>
                                  <th>Country</th>
                                  {/* <th>Total Spent {'($)'}</th> */}
                                  <th>Action</th>
                                </tr>
                              </thead>
                              <tbody className='font-color fs-6'>
                                {allCustomers.map((customer, index) => (
                                  <tr className='border-bottom border-warning border-opacity-10' key={customer._id}>
                                    <td className='p-2'>{index + 1}</td>
                                    <td className="table-image">
                                      <img
                                        className="object-fit-cover rounded-circle p-3"
                                        src={customer.profilePicture}
                                        alt="dp" />
                                    </td>
                                    <td>{customer.fullName}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.address.pincode}</td>
                                    <td>{customer.address.country}</td>
                                    {/* <td>328</td> */}
                                    <td>
                                      <Link to={customer._id} className='text-decoration-none me-3'>
                                        <i className="ai ai-eye-fill action bag"></i>
                                      </Link>
                                      <Link
                                        onClick={() => { deleteHandler(customer._id) }}
                                        className='text-decoration-none'>
                                        <i className="ai ai-trash-fill action bag"></i>
                                      </Link>

                                    </td>
                                  </tr>
                                ))
                                }

                              </tbody>
                            </table>
                          </>
                        ) : (
                          <div className="font-color text-center w-100">No Customers to show!</div>
                        )
                      )
                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Customers
