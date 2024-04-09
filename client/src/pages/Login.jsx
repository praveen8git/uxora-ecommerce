import { Footer, Header } from '../components';
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import IsAuthenticatedContext from '../contexts/IsAuthenticatedContext';

const { VITE_SERVER } = import.meta.env;

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(IsAuthenticatedContext);

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    /**
     * The `handleLogin` function is an asynchronous function that handles user login by sending a POST
     * request to the server, processing the response, and displaying appropriate messages based on the
     * outcome.
     */
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        // login();

        // toast.success("Hello There!", {className: "toastify", autoClose: 15000})
     
        try {
            const response = await axios.post(VITE_SERVER + "/auth/login", formData, {
                withCredentials: true,
            });
            console.log(response.data);
            if (response.data.customer) {
                login({
                    _id: response.data.customer._id,
                    role: response.data.customer.role
                });
                toast.success("logged in successfully!", { className: "toastify" })
                if (response.data.customer.role === "admin") {
                    navigate("/admin")
                } else {
                    navigate("/profile")
                }
            }

        } catch (error) {
            console.log(error);
            if (error.code === "ERR_NETWORK") {
                toast.error("Server Down!", { className: "toastify" });
            }
            error?.response?.status === 401
                ? toast.error(error.response.data.message, { className: "toastify" })
                : toast.error("Server Error");
        } finally {
            setLoading(false);
        }
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
