import { Footer, Header } from '../components'

const Contact = () => {
    return (
        <>
            <Header />
            <main className="container-fluid mt-3 p-0">
                <div className="row g-3">
                    {/* Image section  */}
                    <div className="col-lg-6">
                        <div className="banner-image position-relative overflow-hidden h-100">
                            <div className="image-backdrop position-absolute top-0 bottom-0 start-0 end-0 opacity-50"></div>
                            <img className="object-fit-cover w-100 h-100" src="https://cdn.prod.website-files.com/63cffb7c16ab3347fc9734c8/63d3aa0593749b572bd7d9b2_contact-hero-p-800.webp" alt="contact banner" />
                        </div>
                    </div>
                    {/* Contact form section  */}
                    <div className="col-lg-6">
                        <div className="card container-fluid h-100 p-4">
                            <div className="card-body p-4">
                                <div className="row">
                                    <div className="col">
                                        <p className="product-card-price text-uppercase font-color mb-0">contact</p>
                                        <h1 className="card-heading text-uppercase font-color mb-5 pb-3">Let's Get <br />in Touch</h1>
                                        <form className="contact-form">
                                            <input type="text" className="login-input font-color d-block w-100 my-3" id="name" name="name" placeholder="Enter your name" required />
                                            <input type="email" className="login-input font-color d-block w-100 my-3" id="email" name="email" placeholder="Enter your email" required />
                                            <textarea className="login-input font-color d-block w-100 my-3 p-3" name="message" id="message" cols="30" rows="6" placeholder="Enter your message" required></textarea>
                                            <button type="submit" className="btn text-uppercase d-block my-2 py-3 w-100 fw-bold" style={{fontSize: 0.88 + 'rem'}}>Send Message</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact
