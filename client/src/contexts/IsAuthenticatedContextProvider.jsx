import { useState } from 'react';
import IsAuthenticatedContext from './IsAuthenticatedContext';

const IsAuthenticatedContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <IsAuthenticatedContext.Provider
            value={{
                isAuthenticated,
                login,
                logout
            }}>
            {children}
        </IsAuthenticatedContext.Provider>
    );
};

export default IsAuthenticatedContextProvider;