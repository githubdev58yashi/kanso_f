// actions
import { READ_IMPRESSIONS } from '../actions';

export default(impressions = {}, action) => {
  switch(action.type) {
    // 感想一覧を取得
    case READ_IMPRESSIONS:
      // console.log("===== reducer - readImpressions =====");
      // console.log(action);
      
      return action.impressions;
    default:
      return impressions;
  }
}