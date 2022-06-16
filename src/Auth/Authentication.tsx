import React, { useState, useContext, ReactNode, Dispatch, SetStateAction, ReactElement } from 'react'
import { useLocation, Navigate } from 'react-router';
import { fakeAuthProvider } from './FakeAuthProvider';

export interface AuthContextType {
    user: string | undefined;
    signin: (user: string, callback: VoidFunction) => void;
    signout: (callback: VoidFunction) => void;
};

let AuthContext : React.Context<AuthContextType> = React.createContext<AuthContextType>(null!);


export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}

export default function AuthProvider( { children }: {children: ReactNode} ): ReactElement {
    /*
     * Passes Auth related data and methods - user, signin() and signout() to children
     * via Context
     */
    const [user, setUser] = useState<string|undefined>(undefined);

    let signin = (newUser: string, callback: VoidFunction): void => {
        return fakeAuthProvider.signin(newUser, () => {
            setUser(newUser);
            callback();
        })
    };

    let signout = (callback: VoidFunction): void => {
        return fakeAuthProvider.signout(() => {
            setUser(undefined);
            callback();
        });
    };

    let value: AuthContextType = {user, signin, signout};

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
};

export function RequireAuth ({ children }: { children: ReactNode }) : ReactElement {

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

    return <>{children}</>;
}


