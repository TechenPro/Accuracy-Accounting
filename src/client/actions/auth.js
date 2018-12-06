import axios from 'axios';

import {
    AUTHENTICATE_USER
} from './types';


export function signIn(fields, success) {
    return function(dispatch) {
        axios.post('/api/getUsername', fields)
            .then(response => {
                dispatch({
                    type: AUTHENTICATE_USER,
                    payload: response.data
                })
                const {token} = response.data;
                localStorage.setItem('token', token);
                success();
            })
            .catch(err => {console.log(err)})
    }
}
