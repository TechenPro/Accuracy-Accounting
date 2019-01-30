import {
    FETCH_SCHEDULE
  } from '../actions/types';

  const INITIAL_STATE = {
    events: [{
        "time": "2",
        "client": "Maximus Cortel",
        "email": "mctl@jim.com",
        "date": "Thu Jan 31 2019 14:00:00 GMT-0700 (Mountain Standard Time)"
    }]
  }

  export default function(state = INITIAL_STATE, action) {
      switch(action.type) {
            case FETCH_SCHEDULE:
                const events = action.payload;
                return{
                    ...state,
                    events
                }
            default:
                return state;
        }
  }
