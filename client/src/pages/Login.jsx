import { Footer, Header } from '../components';
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const { VITE_SERVER } = import.meta.env;

const Login = () => {

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handles login
    const handleLogin = async (e) => {
        e.preventDefault();
        toast.error("Hello There!", {className: "toastify"})
        // setLoading(true);
        // try {
        //     const response = await axios.post(VITE_SERVER + "/auth/login", formData, {
        //         withCredentials: true,
        //     });
        // } catch (error) {
        //     if (error.code === "ERR_NETWORK") {
        //         toast.error("Server Down!");
        //     }
        //     error?.response.status === 401
        //         ? toast.error(error.response.data.message)
        //         : toast.error("Server Error");
        // } finally {
        //     setLoading(false);
        // }
    };


    return (
        <>
            <Header />
            <main className="container-fluid position-relative h-500px p-0">
                <div className="login-card h-50 w-50 font-color">
                    {/* Login form  */}
                    <form
                        onSubmit={handleLogin}
                        className="login-form align-item-center mb-0 d-flex position-static">

                        <h1 className="login-heading fs-5 lh-lg text-uppercase">
                            Login
                        </h1>
                        <input
                            type="email"
                            className="login-input font-color d-block my-2"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            onChange={(e) => onChangeHandler(e)}
                            required />

                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="login-input font-color d-block my-2"
                            placeholder="Enter your password"
                            onChange={(e) => onChangeHandler(e)}
                            required />

                        <button
                            type="submit"
                            className="btn text-uppercase d-block my-2 py-3"
                            style={{ fontSize: 0.88 + 'rem' }}>
                            Submit
                        </button>

                    </form>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Login
