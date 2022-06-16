/**
 * To be replaced with actual auth API calls
 */

import axios from "axios";

const url_login = "/api/signin";
const url_logout = "/api/signout";

interface login_req {
    user: string
}

let loggedInUser: string | null = null

export const fakeAuthProvider  = {
    isAuthenticated: false,

    // Fake function to simulate call to auth api 
    signin(user: string, callback: VoidFunction) {
        let payload: login_req = {
            user: user
        };
        axios.post(url_login, payload)
        .then(res => {
            console.log(res.data)
            if(res.data.status == 200) {
                fakeAuthProvider.isAuthenticated = true;
                loggedInUser = user;
                callback();
            }
        })
        .catch(err => {
            console.error(err);
            fakeAuthProvider.isAuthenticated = false;
        })
    },
    signout(callback: VoidFunction) {

        if(loggedInUser == null) return;

        let payload: login_req = {
            user: loggedInUser
        };

        axios.post(url_logout, payload)
        .then(res => {
            if(res.data.status == 200) {
                fakeAuthProvider.isAuthenticated = false;
                callback();
            }
        })
        .catch(err => {
            console.error(err);
        })
    }
};

