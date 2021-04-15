// router-dom
import history from './history/history.js';
// store
import store from './store/store.js';

// ログインしているかチェック（フロントエンド開発用）
// 本来は、ログイン後にセッションやJWTで管理？するため、本来の動作と違うが
// ログイン情報が無い場合に、エラーになるのを回避するため、フロントエンドの開発時のみ実装。
// ログイン処理が実装後は不要になるはず。

const checkLogin = () => {
  // console.log("===== checkLogin =====");

  // storeからログイン情報を取得
  let login = store.getState().login;
  // console.log(login);

  // console.log(process.env);
  // console.log(process.env.STORYBOOK);

  // ログイン情報が存在するか確認
  if (Object.keys(login).length === 0) {
    // 存在しない場合
    // console.log("not login")
    // console.log(process.env)

    // storybookの場合は、ログイン情報を埋め込む
    // envがbooleanではなく、stringのため判定もstringでやる
    if (process.env.STORYBOOK === "true") {
      let user = {
        userId: "storybookUserId",
        userName: "storybookUserName",
      };
      // ユーザー情報を設定する
      store.getState().login.user = user;

      // console.log("storybook - undefined")  
      // console.log(store.getState());
    }
    else {
      // ログインが必要な画面のURLを直接たたいた場合にここに来るはず
      // console.log("not storybook");

      // render時にuser情報が必要なコンポーネントがレンダーされると、undefinedになるため、一時的に設定する。この値が使用されることは無いはず。
      let user = {
        userId: "checkLoginUserId",
        userName: "checkLoginUserName",
      }
      // ユーザー情報を設定する
      store.getState().login.user = user;

      // ログイン画面に遷移
      history.push("/");
    }
  }
  return null;
};

export default checkLogin;