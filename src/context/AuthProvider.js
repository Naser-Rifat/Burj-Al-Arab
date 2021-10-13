import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const Authcontext = createContext();
const AuthProvider = ({ children }) => {

    const allcontexts = useFirebase();
    return (
        <Authcontext.Provider value={allcontexts}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;