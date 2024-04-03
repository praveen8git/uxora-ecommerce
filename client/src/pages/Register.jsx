import { Footer, Header } from '../components'

const Register = () => {
  return (
    <>
            <Header />
            <main className="container-fluid position-relative h-500px p-0">
                <div className="login-card h-50 w-50 font-color">
                    {/* Registeration form  */}
                    <form className="login-form align-item-center mb-0 d-flex position-static">
                        <h1 className="login-heading fs-5 lh-lg text-uppercase">
                            Register
                        </h1>
                        <input type="email" className="login-input font-color d-block my-2" id="email" name="email" placeholder="Enter your email" required />

                        <input type="password" name="password" id="password" className="login-input font-color d-block my-2" placeholder="Enter your password" required />
                        <input type="password" name="confirmPassword" id="confirmPassword" className="login-input font-color d-block my-2" placeholder="Enter password again" required />

                        <button type="submit" className="btn text-uppercase d-block my-2 py-3" style={{fontSize: 0.88 + 'rem'}}>Submit</button>

                    </form>
                </div>
            </main>
            <Footer />
        </>
  )
}

export default Register
