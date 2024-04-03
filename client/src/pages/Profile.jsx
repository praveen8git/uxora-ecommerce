import React from 'react'
import { Footer, Header, OrdersTable, PageTitle } from '../components'

const Profile = () => {
  return (
    <>
      <Header />
      <PageTitle title={'Profile'} />
      <section className='container-fluid mt-3 p-0'>
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
                    src="https://source.unsplash.com/random/500x500/?man,dp"
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
                  Frederick C. Frazier
                </h3>
                <p className="card-text bag fs-6">
                  <span className="bag">Email: </span> Frederick@email.com <br />
                  <span className="bag">Phone: </span> +1 302 12387635 <br />
                  <span className="bag">Address: </span> Vancouver, British Columbia, Canada
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
            <OrdersTable />
          </div>
        </div>

      </section>

      <Footer />
    </>
  )
}

export default Profile
