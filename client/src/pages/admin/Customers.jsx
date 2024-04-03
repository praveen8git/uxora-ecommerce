import { Link } from "react-router-dom"
import { PageTitle } from "../../components"

const Customers = () => {
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
                    <table className="order-table w-100">
                      <thead className='card-heading text-uppercase font-color fs-6 bag'>
                        <tr className='border-bottom border-warning border-opacity-10'>
                          <th className='p-1'>#</th>
                          <th></th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Pincode</th>
                          <th>Country</th>
                          <th>Total Spent {'($)'}</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody className='font-color fs-6'>
                        <tr className='border-bottom border-warning border-opacity-10'>
                          <td className='p-2'>1</td>
                          <td className="table-image">
                            <img
                              className="object-fit-cover rounded-circle p-3"
                              src="https://source.unsplash.com/random/500x500/?man,dp"
                              alt="" />
                          </td>
                          <td>Frederick C. Frazier</td>
                          <td>Frederick@email.com </td>
                          <td>25623</td>
                          <td>Canada</td>
                          <td>328</td>
                          <td>
                            <Link className='text-decoration-none me-3'>
                              <i className="ai ai-eye-fill action bag"></i>
                            </Link>
                            <Link className='text-decoration-none'>
                              <i className="ai ai-trash-fill action bag"></i>
                            </Link>

                          </td>
                        </tr>
                        
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

export default Customers