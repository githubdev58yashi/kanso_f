// actions
import { POST_LOGIN } from '../actions';

export default(loginInfo = {}, action) => {
  switch(action.type) {
    case POST_LOGIN:
      // APIから返されたresponseのデータを返す

      // console.log("reducer - postLogin");
      // console.log(action.response);
      return action.response;
    default:
      return loginInfo;
  }
}