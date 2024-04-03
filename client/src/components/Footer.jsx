
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
                                        <a href="#" className="navbar-brand font-color text-uppercase fs-3">ÜXORA</a>
                                        <p className="card-text mb-2">
                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        </p>
                                    </div>
                                    <div className="mt-2">
                                        <a href="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-instagram-logo fs-1"></i>
                                        </a>
                                        <a href="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-dribbble-logo fs-1"></i>
                                        </a>
                                        <a href="#" className="footer-link text-uppercase text-decoration-none me-2">
                                            <i className="ai ai-behance-logo fs-1"></i>
                                        </a>
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
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">Dresses</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">pants</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">skirts</a></li>

                                            </ul>
                                        </div>
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">men</h2>
                                            <ul className="footer-menu p-1">
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">shirts</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">pants</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">hoodies</a></li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">kids</h2>
                                            <ul className="footer-menu p-1">
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">Dresses</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">T-shirts</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">Hoodies</a></li>

                                            </ul>
                                        </div>
                                        <div className="col-sm-6 mt-2">
                                            <h2 className="card-heading font-color text-uppercase fs-4">links</h2>
                                            <ul className="footer-menu p-1">
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">home</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">login</a></li>
                                                <li><a className="footer-link font-color text-decoration-none text-uppercase"
                                                    href="#">contact</a></li>

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
                                        <a href="#" className="navbar-brand font-color" style={{ fontSize: 1 + 'rem' }}>ÜXORA </a>
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
