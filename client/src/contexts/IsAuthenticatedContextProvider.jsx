import { useState } from 'react';
import IsAuthenticatedContext from './IsAuthenticatedContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

/**
 * The `IsAuthenticatedContextProvider` function manages user authentication state in a React
 * application, providing login and logout functionality.
 * @returns The `IsAuthenticatedContextProvider` component is being returned. It provides a context
 * provider with values for `isAuthenticated`, `user`, `login`, and `logout` that can be accessed by
 * its children components.
 */
const IsAuthenticatedContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        // toast.success("logged in successfully!", { className: "toastify" })
    };

    const logout = () => {
        setUser(null)
        setIsAuthenticated(false);
        toast.success("logged out!", { className: "toastify" })
        navigate("/login");
    };

    return (
        <IsAuthenticatedContext.Provider
            value={{
                isAuthenticated,
                user,
                login,
                logout,
            }}>
            {children}
        </IsAuthenticatedContext.Provider>
    );
};

export default IsAuthenticatedContextProvider;