import React, { useState, useContext } from 'react'
import { useLocation, Navigate } from 'react-router';
import { fakeAuthProvider } from './auth';

let AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider( { children } ) {
    /*
     * Passes Auth related data and methods - user, signin() and signout() to children
     * via Context
     */
    const [user, setUser] = useState();

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        })
    };

    let signout = (newUser, callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = {user, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export function RequireAuth ({ children }) {

    /**
     * Checks authentication status of user. 
     * If not logged in, redirects to login page. The redirect is not logged in history 
     * so user doesn't go back to login page when they press the 'back button   
     */

    let auth = useAuth();
    let location = useLocation();

    if(!auth.user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return children;
}


