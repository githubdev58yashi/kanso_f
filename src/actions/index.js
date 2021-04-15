import axios from 'axios';
// testデータ
import { users, impressions } from '../mock/datas';

// export(reducerで使用)
export const POST_LOGIN = 'POST_LOGIN';
export const READ_IMPRESSION = 'READ_IMPRESSION';
export const READ_IMPRESSIONS = 'READ_IMPRESSIONS';

// APIのURL(TODO:バックエンド実装時に置き換える)
const ROOT_URL = 'https://example.com/api/';
const QUERYSTRING = '?token=tokenXXX';

// 非同期処理を実行するため、redux-thunkをインストールする。
// actionの代わりに関数を返すことができるようになる。
// redux-thunkはrootのindex.jsで設定する。

// ログイン
export const postLogin = loginInfo => async dispatch => {

  // responseの初期値を設定
  let init = {
    'status': null,
    'statusText': null,
  };

  const mockUsers = users;
  // console.log(mockUsers);
  let findIndex = mockUsers.findIndex(mockUser => mockUser.userId === loginInfo.userId);
  // console.log(findIndex);

  // dev_user1または、dev_user2の場合のみログイン可能
  if (findIndex !== -1) {
    // console.log("success");
    // console.log(mockUsers.findIndex(loginInfo.userId));
    // console.log(mockUsers[findIndex]);
    
    // パスワードが一致しているか
    if (mockUsers[findIndex].password === loginInfo.password) {
      // console.log("success");
      
      // ログイン成功
      init = {'status' : 200, 'statusText': 'success'};
    }
    else {
      // console.log("error");
      
      // ログイン失敗
        init = {'status' : 401, 'statusText': "error"};
    }
  }
  else {
    // console.log("error");
    // ログイン失敗
    init = {'status' : 401, 'statusText': "error"};
  }

  // Response生成
  const myBlob = new Blob();
  const temporaryResponse = new Response(myBlob, init);

  // reducerに渡す用に加工
  const response = {
    user: {
      userId: loginInfo.userId,
      userName: "name:" + loginInfo.userId,
    },
    response: temporaryResponse,
  };

   // reducerに渡す
   dispatch({ type: POST_LOGIN, response });
};

// 感想を取得
export const readImpression = id => async dispatch => {
  // console.log("action - readImpression");
  // console.log(id);
  const mockImpressions = impressions;
  let findIndex = mockImpressions.findIndex(mockImpression => mockImpression.impressionId == id);

  // console.log(mockImpressions);
  // console.log(findIndex);
  // console.log(mockImpressions[findIndex]);

  let impression = mockImpressions[findIndex];

  // reducerに渡す
  dispatch({ type: READ_IMPRESSION, impression });
};

// 感想一覧を取得
export const readImpressions = path => async dispatch => {
  // console.log("===== actions - readImpressions =====");
  // console.log(impressions);

  // reducerに渡す
  dispatch({ type: READ_IMPRESSIONS, impressions});
};