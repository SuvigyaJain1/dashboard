import React, { useState } from 'react'
import { fakeAuthProvider } from './auth';

export default function AuthProvider( { children } ) {
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

