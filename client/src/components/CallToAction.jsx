// import { Bounce } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="call-to-action container-fluid mt-3">
            <div className="row p-lg-5 p-4">
                <div className="col-md-9">
                    <p className="product-card-price text-uppercase m-0">
                        Shop
                    </p>
                    <h3 className="card-heading display-2 fw-normal lh-1">
                        LET'S MAKE YOUR FASHION SHINE
                    </h3>
                </div>
                <div className="col-md-3 d-flex align-items-center">
                    <Link to="/shop" className="btn cta-btn text-uppercase font-color d-block py-3 w-100">
                        visit shop <i className="ai ai-arrow-up-right"></i>
                    </Link>
                </div>
            </div>
        </section>
  )
}

export default CallToAction
