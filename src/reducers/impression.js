
// actions

import { READ_IMPRESSION } from '../actions';

export default(impression = {}, action) => {
  switch(action.type) {
    // 感想を取得
    case READ_IMPRESSION:
      // console.log("reducer - readImpression");
      // console.log(action);
      
      return action.impression;
    default:
      return impression;
  }
}