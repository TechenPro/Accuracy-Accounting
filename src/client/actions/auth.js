import jwt from 'jwt-simple';

import {
    AUTHENTICATE_USER
} from './types';

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

export function signIn(fields, success) {
    return function(dispatch) {

        const user = {
            id: 156,
            ...fields
        };

        dispatch({
            type: AUTHENTICATE_USER,
            payload: {user}
        })

        const token = tokenForUser(user);
        localStorage.setItem('token', token);
        success();

    }
}
