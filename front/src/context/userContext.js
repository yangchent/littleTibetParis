import { useState, createContext } from 'react';

export const SocketContext = createContext();

const SocketioContext = (props) => {
    const [userId_A, setUserId_A] = useState("");
    const [userId_B, setUserId_B] = useState("");

    const value = {
        userId_A,
        setUserId_A,
        userId_B,
        setUserId_B,
    };

    return (
        <SocketContext.Provider value={value}>
            {props.children}
        </SocketContext.Provider>
    );
};

export default SocketioContext;