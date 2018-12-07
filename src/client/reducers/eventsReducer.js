import {
    FETCH_SCHEDULE
  } from '../actions/types';

  const INITIAL_STATE = {
    events: []
  }

  export default function(state = INITIAL_STATE, action) {
      switch(action.type) {
            case FETCH_SCHEDULE:
                const events = action.payload;
                console.log(events);
                return{
                    ...state,
                    events
                }
            default:
                return state;
        }
  }
