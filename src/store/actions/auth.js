import * as actionTypes from './action-types';

import { auth } from '../../firebase';

export const authStart = () => {
    return {type:actionTypes.AUTH_START}
}

export const authSuccess = () => {
    return {type: actionTypes.AUTH_SUCCESS}
}

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error,
    }
}


export const userSignUp = (email, password, isValid) => {
    return dispatch => {
        isValid? dispatch(authStart()):dispatch(authFail('invalid info'))
        
        auth.createUserWithEmailAndPassword(email, password)
        .then((user)=> {
            dispatch(authSuccess())
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const verifyAuth = () => {
    return dispatch => {
        dispatch(authStart())
        auth.onAuthStateChanged(user=> {
            if(user){
                dispatch(authSuccess())
            } else {
                dispatch(authFail())
            }
        });
    }
}