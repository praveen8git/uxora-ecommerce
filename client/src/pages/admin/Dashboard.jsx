import { Fade, Slide } from "react-awesome-reveal"

const Dashboard = () => {
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
                        7
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
                        11
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
                        24
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={150}  className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        {'Today\'s Revenue ($)'}
                      </h3>
                      <p className="text-center display-3 bag">
                        224
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
                        100
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
                        211
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
                        30
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <Slide delay={150}  className="h-100">
                <div className="card container-fluid bg-color h-100">
                  <div className="card-body p-4">
                    <div className="row h-100 ">
                      <h3 className="card-heading font-color fs-6 text-uppercase">
                        {'Total Revenue ($)'}
                      </h3>
                      <p className="text-center display-3 bag">
                        32224
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
