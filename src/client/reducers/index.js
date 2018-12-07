import { combineReducers } from 'redux';

import { reducer as form } from 'redux-form';

import auth from './authReducer';
import events from './eventsReducer';

const rootReducer = combineReducers({
  form,
  auth,
  events
});

export default rootReducer;
