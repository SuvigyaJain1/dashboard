/**
 * To be replaced with actual auth API calls
 */

export const fakeAuthProvider  = {
    isAuthenticated: false,

    // Fake function to simulate call to auth api 
    signin(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100);
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    }
};

