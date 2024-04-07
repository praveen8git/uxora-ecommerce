import axios from 'axios';
import { Link } from "react-router-dom"
import { PageTitle } from "../../components"
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const { VITE_SERVER } = import.meta.env;

const Products = () => {
  const [loading, setLoading] = useState();

  const [allProducts, setAllProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${VITE_SERVER}/api/all-products`, {
        withCredentials: true,
      });
      console.log("all-products", response.data);
      setAllProducts(response.data.allProducts)
      setLoading(false);

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null
    } finally {
      setLoading(false);
    }
  }

  const deleteHandler = async (id) => {
    setLoading(true);

    try {

      const response = await axios.delete(`${VITE_SERVER}/api/admin/delete-product/${id}`, {
        withCredentials: true,
      });
      console.log("deleteHandler", response.data);

      response.data.success ?
        toast.success("Product deleted successfully!", { className: "toastify" }) : null;

      setLoading(false);

      // remove product from table
      setAllProducts.filter(item => item._id != id)

    } catch (error) {
      console.error(error);
      error.message ? toast.error(error.message, { className: "toastify" }) : null;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllProducts();
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
                    All Products
                  </h3>
                  <p className="card-text font-color fs-6">
                    Find all your products and their details below. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div className="table-responsive">
                    <table className="order-table w-100">
                      <thead className='card-heading text-uppercase font-color fs-6 bag'>
                        <tr className='border-bottom border-warning border-opacity-10'>
                          <th className='p-1'>#</th>
                          <th></th>
                          <th>Product Name</th>
                          <th>Price {'($)'}</th>
                          <th>Category</th>
                          <th>Sub-Category</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className='font-color fs-6'>
                        {!loading ? (
                          allProducts.length > 0 ?
                            (
                              allProducts.map((product, index) => (
                                <tr className='border-bottom border-warning border-opacity-10' key={product._id}>
                                  <td className='p-2'>{index + 1}</td>
                                  <td className="table-image">
                                    <img
                                      className="object-fit-cover rounded-circle p-3"
                                      src={product.image}
                                      alt="" />
                                  </td>
                                  <td>{product.productName}</td>
                                  <td>${product.salePrice}.00</td>
                                  <td>{product.category}</td>
                                  <td>{product.subCategory}</td>
                                  <td>
                                    <Link to={`/product/${product._id}`} className='text-decoration-none me-3'>
                                      <i className="ai ai-eye-fill action bag"></i>
                                    </Link>
                                    <Link
                                      onClick={() => { deleteHandler(product._id) }}
                                      aria-disabled={loading}
                                      className='text-decoration-none'>
                                      {
                                        loading ?
                                          (<span class="spinner-grow spinner-grow-sm bag me-2" aria-hidden="true"></span>)
                                          : (<i className="ai ai-trash-fill action bag"></i>)
                                      }
                                    </Link>

                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr className='border-bottom border-warning border-opacity-10'>
                                <td>No</td><td> </td>
                                <td className="p-2 text-center text-wrap">
                                Products
                                </td>
                                <td> to</td><td>show</td>
                                <td>here</td>
                              </tr>
                            )
                        ) : (
      
                          <tr className='border-bottom border-warning border-opacity-10'>
                            <td>
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                            <td>
                              
                            </td>
                            <td className="p-2 text-center text-wrap">
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                            <td>
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                            <td>
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                            <td>
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                            <td>
                              <span className="mx-2 spinner-grow spinner-grow-sm bag" aria-hidden="true"></span>
                            </td>
                          </tr>
                        )
                        }
                      </tbody>
                    </table>
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

export default Products
