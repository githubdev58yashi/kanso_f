// 今回はclass componentで実装しているため、makeStylesは使わない。
// 現時点はfunction componentが主流らしいので、今後置き換える
//import { makeStyles } from '@material-ui/core/styles';

import myTheme from '../../../myTheme';

const maxWidth = 375;

const useStylesForCC = {
  root: {
    // 高さを100%に
    height: '100vh',
    // 左右中央寄せ
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    // 画面の最大幅はiPhoneX/XS/Proのサイズの375px - 左右マージン */
    // maxWidth: `calc(${maxWidth} - (${myTheme.spacing(2)} * 2)px)`,
    width: '100%',
    maxWidth: `${maxWidth - (myTheme.spacing(2) * 2)}px`,
  },
  // サービス名
  serviceName: {
    fontWeight: 'bold',
  },
  // ヘッダー
  header: {
    marginTop: `${myTheme.spacing(3)}`,
  },
  // inputフィールド
  inputField: {
    marginTop: `${myTheme.spacing(2)}px`,
  },
  // ユーザー名・パスワードを忘れた場合はこちら
  recovery: {
    marginTop: `${myTheme.spacing(2)}px`,
  },
  // ログインボタン
  loginButton: {
    marginTop: `${myTheme.spacing(3)}px`,
  },
  // アカウント作成ボタン
  createAccountButton: {
    marginTop: '140px',
  },
};

export default useStylesForCC;