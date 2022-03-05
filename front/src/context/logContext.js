import { useState, createContext } from 'react';

export const UserContext = createContext();

const LogContext = (props) => {
    const [isLogged, setLogged] = useState(false);
    const value = {
        isLogged,
        setLogged
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};

export default LogContext;