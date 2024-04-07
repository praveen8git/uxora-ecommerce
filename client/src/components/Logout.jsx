import axios from "axios";
import { useContext, useEffect } from "react";
import IsAuthenticatedContext from "../contexts/IsAuthenticatedContext";

const { VITE_SERVER } = import.meta.env;

const Logout = () => {

    const { logout } = useContext(IsAuthenticatedContext);

    const logOut = async () => {
        const response = await axios.get(`${VITE_SERVER}/auth/logout`, {
            withCredentials: true,
        });
        console.log(response.data);
        logout();
    };

    useEffect(() => {
        logOut();
    });

    return (
        <div>
            Something went wrong! please go back and try again.
        </div>
    )
}

export default Logout
