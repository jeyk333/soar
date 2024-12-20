import { combineReducers } from 'redux';

import userReducer from './user/slice';

const reducers = combineReducers({
  user: userReducer,
});

export default reducers;
