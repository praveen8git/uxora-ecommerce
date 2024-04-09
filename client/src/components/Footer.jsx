import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="container-fluid mt-3 p-0">
            <div className="row g-3">
                {/* Section with logo and social links  */}
                <div className="col-lg-3 mb-lg-0 mb-3">
                    <div className="card container-fluid h-100">
                        <div className="card-body p-4">
                            <div className="row h-100 ">
                                <div className="col d-flex flex-column justify-content-between">
                                    <div>
                                        <Link to="/" className="navbar-brand font-color text-uppercase fs-3">ÜXORA</Link>
                                        <p className="card-text mb-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <Link to="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-instagram-logo fs-1"></i>
                                        </Link>
                                        <Link to="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-dribbble-logo fs-1"></i>
                                        </Link>
                                        <Link to="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-behance-logo fs-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Section with all the links for other webpages */}
                < div className="col-lg-9" >
                    <div className="card container-fluid">
                        <div className="card-body p-4 sm-text-center">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">woman</h2>
                                            <ul className="footer-menu p-1">
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/women/dresses">Dresses</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/women/pants">pants</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/women/skirts">skirts</Link></li>

                                            </ul>
                                        </div>
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">men</h2>
                                            <ul className="footer-menu p-1">
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/men/shirts">shirts</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/men/pants">pants</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/men/hoodies">hoodies</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">kids</h2>
                                            <ul className="footer-menu p-1">
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/kids">Dresses</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/kids">T-shirts</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/kids">Hoodies</Link></li>

                                            </ul>
                                        </div>
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">links</h2>
                                            <ul className="footer-menu p-1">
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/">home</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/login">login</Link></li>
                                                <li><Link className="footer-link font-color text-decoration-none text-uppercase"
                                                    to="/contact">contact</Link></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Copyright message section */}
                    <div className="card container-fluid mt-3">
                        <div className="card-body p-4">
                            <div className="row">
                                <div className="col">
                                    <p className="text-center copyright m-0">
                                        <Link to="/" className="navbar-brand font-color" style={{ fontSize: 1 + 'rem' }}>ÜXORA </Link>
                                        - © Copyright 2024
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </footer >
    )
}

export default Footer
