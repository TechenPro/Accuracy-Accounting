import axios from 'axios';

import {
    FETCH_SCHEDULE
} from './types';

export function fetchSchedule() {
    return function(dispatch) {
        axios.get('/api/getSchedule')
            .then(response => {
                dispatch({
                    type: FETCH_SCHEDULE,
                    payload: response.data
                })
            })
            .catch(err => {console.log(err)})
    }
}
