// redux
import { combineReducers } from 'redux';
// redux-form
import { reducer as form } from 'redux-form';
// reducers
import login from './login';
import impression from './impression';
import impressions from './impressions';
// import search from './search';

// reducerを設定する
export default combineReducers({
  login,
  impression,
  impressions,
  // search,
  form
});