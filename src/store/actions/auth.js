import * as actionTypes from './action-types';

import { auth } from '../../firebase';

export const authStart = () => {
    return { type: actionTypes.AUTH_START }
}

export const authSuccess = () => {
    return { type: actionTypes.AUTH_SUCCESS }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

export const userSignUp = (email, password, isValid, callback) => {
    return dispatch => {
        isValid ? dispatch(authStart()) : dispatch(authFail('invalid info'))

        try {
            auth.createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    dispatch(authSuccess())
                    callback()
                })
                .catch((error) => {
                    dispatch(authFail(error.message))
                })
        }
        catch (error) {
            dispatch(authFail(error.message))
        }

    }
}

export const userSignIn = (email, password) => {
    return dispatch => {
        dispatch(authStart())
        try {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    // var user = userCredential.user;
                    // ...
                    dispatch(authSuccess())
                })
                .catch((error) => {
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    if(error.code==='auth/user-not-found' || error.code ==='auth/wrong-password'){
                        dispatch(authFail('Invalid Username or Password'))
                    }else {
                        dispatch(authFail(error.message))
                    }
                        
                });
        }
        catch (error) {
            dispatch(authFail(error.message))
            console.log(error)
        }
    }
}

export const userSignOut = (callback) => {
    return dispatch => {
        try {
            auth.signOut().then(() => {
                // Sign-out successful.
                dispatch(authLogout())
                callback()
            }).catch((error) => {
                // An error happened.
                console.log(error)
            });
        }
        catch (error) {
            console.log(error)
        }
    }
}

export const verifyAuth = () => {
    return dispatch => {
        dispatch(authStart())
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(authSuccess())
            } else {
                dispatch(authFail())
            }
        });
    }
}