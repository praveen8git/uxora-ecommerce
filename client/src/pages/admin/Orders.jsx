import { OrdersTable } from "../../components"



const Orders = () => {
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
                  <input type="checkbox"
                    className="btn-check"
                    id="processing"
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="processing">
                    Processing
                  </label>

                  <input type="checkbox"
                    className="btn-check"
                    id="dispatched"
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="dispatched">
                    Dispatched
                  </label>

                  <input type="checkbox"
                    className="btn-check"
                    id="onTheWay"
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="onTheWay">
                    On the way
                  </label>

                  <input type="checkbox"
                    className="btn-check"
                    id="delivered"
                    autoComplete="off" />
                  <label className="filter-btn btn btn-sm border bag mx-lg-4" htmlFor="delivered">
                    Delivered
                  </label>

                  <input type="checkbox"
                    className="btn-check"
                    id="cancelled"
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
          <OrdersTable action />
        </div>
      </div>
    </main>
  )
}

export default Orders
