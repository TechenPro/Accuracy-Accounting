import {
  AUTHENTICATE_USER
} from '../actions/types';

const INITIAL_STATE = {
  authenticated: true,
  user: {
    "id": 0,
    "username": "Gilgamesh",
  }
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      const { user } = action.payload;
      return {
        ...state,
        authenticated: true,
        user
      }
    default:
      return state;
  }
}
