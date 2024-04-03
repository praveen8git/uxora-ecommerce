import { Link, NavLink, Outlet } from "react-router-dom"

const AdminHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid px-4 py-2">

                <NavLink className="navbar-brand font-color position-relative" to="/">
                    ÜXORA
                    <span className="position-absolute top-0 start-50 translate-middle fs-6">
                        <i className="ai ai-crown-fill bag"></i>
                    </span>

                </NavLink>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-theme="dark"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse row navbarNav" id="navbarNav">
                    <ul className="navbar-nav col font-color justify-content-end gap-">
                        <li className="nav-link">
                            <NavLink to="dashboard" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="orders" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Orders
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="add-product" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Add Product
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="products" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Products
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="customers" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Customers
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/logout" id="login" className="btn d-flex align-items-center nav-link font-color bg-color px-4 py-2 mx-2 text-uppercase"
                                style={{ fontSize: 0.88 + 'rem' }}>
                                Logout
                                {/* <i className="ai ai-sign-out-fill ms-2"></i> */}
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Outlet />
        </>
    )
}

export default AdminLayout
