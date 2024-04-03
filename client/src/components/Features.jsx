import { Fade, Slide } from "react-awesome-reveal"

const Features = () => {
    return (
        <section className="features container-fluid mt-3 p-0">
            <Fade cascade damping={0.2}>
            <div className="row g-3">
                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <Slide>
                        <div className="card container-fluid bg-color h-100">
                            <div className="card-body p-4">
                                <div className="row h-100 ">

                                    <h3 className="card-heading font-color fs-4 text-uppercase">
                                        Shipping
                                    </h3>
                                    <p className="card-text font-color fs-6">
                                        Shop with confidence and get products delivered for free on minimum order of $100.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div>
                

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <Slide delay={50}>
                        <div className="card container-fluid bg-color h-100">
                            <div className="card-body p-4">
                                <div className="row h-100 ">
                                    <h3 className="card-heading font-color fs-4 text-uppercase">
                                        Payment
                                    </h3>
                                    <p className="card-text font-color fs-6">
                                        Pay securely and conveniently with your preferred method - we accept it all.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <Slide delay={100}>
                        <div className="card container-fluid bg-color h-100">
                            <div className="card-body p-4">
                                <div className="row h-100 ">
                                    <h3 className="card-heading font-color fs-4 text-uppercase">
                                        Support
                                    </h3>
                                    <p className="card-text font-color fs-6">
                                        We are always here to help you with any queries or issues. We value your feedback.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div>

                    <div className="col-sm-12 col-md-6 col-lg-3">
                        <Slide delay={150}>
                        <div className="card container-fluid bg-color h-100">
                            <div className="card-body p-4">
                                <div className="row h-100 ">
                                    <h3 className="card-heading font-color fs-4 text-uppercase">
                                        Rewards
                                    </h3>
                                    <p className="card-text font-color fs-6">
                                        Join our loyality program and earn discounts and special gifts on every purchase.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </Slide>
                    </div> 
            </div>
            </Fade>
        </section>
    )
}

export default Features
