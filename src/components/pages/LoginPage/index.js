// function componentでonSubmit時にactionにデータを渡す方法がわからないため、class componentで書く
// 現状のソースだとredux-formのデータをreduxに登録しているが、使用していないためあまり意味がない気がする。
// formの各フィールドの値の変更を意識しなくていいくらいか？

import React from 'react';
// redux
import { connect } from 'react-redux';
// router-dom
import history from '../../../history/history.js';
// redux-form
import { Field, reduxForm, SubmissionError, touch} from 'redux-form';
// actions
import { postLogin } from '../../../actions';
// material-ui components
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// css
import useStyleForCC from './useStyleForCC';
import { withStyles } from '@material-ui/core/styles';

// クラス
class LoginPage extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);
    // console.log("===== LoginPage - constructor =====");
    // イベントをバインドする
    this.onSubmit = this.onSubmit.bind(this);
  };

  // redux-formで使用するテキストフィールド
  renderTextField(Field) {
    const { className, input, label, type, meta: { touched, error } } = Field;

    return (
      //   {/* varidateでエラーがある場合にメッセージerrorを表示 */}
      //   {/* touched: 一回でも要素に触ったらtrue */}
      <TextField
        className={ className }
        label={ label }
        variant="outlined"
        type={ type }
        error={ touched && error }
        helperText={ touched && error }
        { ...input }
        fullWidth={ true }
      />
    );
  };

  // 送信
  async onSubmit(values) {
    // actionに送信
    await this.props.postLogin(values);

    // reducerから渡されたログイン結果を元に処理を変える
    if (this.props.login.response.status === 200) {
      // 感想一覧画面に遷移
      history.push('/impressions');
    }
    else {
      // アラートを表示
      throw new SubmissionError({
        userId: 'IDが間違っているか存在しません',
        password: 'IDまたはパスワードが間違っています'
      });
    }
  };

  // 表示
  render() {
    // pristine: 何も触っていない状態にtrue
    // submitting: submit中はtrue（二度押し防止）
    // isInvalid: フォームが無効の場合にtrue 
    const { handleSubmit, pristine, submitting, isInvalid } = this.props;

    return (
      <Box
        component="div"
        className={ this.props.classes.root }
      >
        <Box
          component="div"
          className={ this.props.classes.login }
        >
          {/* サービス名 */}
          <Typography
            className={ this.props.classes.serviceName }
            variant="h3"
            color="primary"
            align="center"
          >
            KANSO
          </Typography>

          {/* ヘッダー */}
          <Typography
            className={ this.props.classes.header }
            variant='h6'
            align='center'
          >
            ログイン
          </Typography>

          {/* フォーム */}
          <form onSubmit={ handleSubmit(this.onSubmit) }>
            {/* ユーザーID */}
            <Box component="div">
              <Field
                className={ this.props.classes.inputField }
                label="ユーザーID"
                name="userId"
                type="text"
                component={this.renderTextField}
              />
            </Box>

            {/* パスワード */}
            <Box component="div">
              <Field
                className={ this.props.classes.inputField }
                label='パスワード'
                name='password'
                type='password'
                component={this.renderTextField}
              />
            </Box>

            {/* ユーザー名・パスワードを忘れた場合はこちら [未実装] */}
            <Box component="div">
              <Typography
                className={ this.props.classes.recovery }
                variant='body2'
                align='right'
              >
                ユーザー名・パスワードを忘れた場合はこちら
              </Typography>
            </Box>

            {/* ログインボタン */}
            <Box component="div">
              <Button
                className={ this.props.classes.loginButton }
                variant="contained"
                color="primary"
                label="login"
                type="submit"
                fullWidth={true}
                disabled={pristine, submitting, isInvalid}
              >
                ログイン
              </Button>
            </Box>
          </form>

          {/* アカウント作成ボタン [未実装] */}
          <Box component="div">
            <Button
              className={ this.props.classes.createAccountButton }
              variant='outlined'
              label='createAccount'
              color='primary'
              fullWidth={true}
            >
              アカウント作成
            </Button>
          </Box>
        </Box>
      </Box>
    );
  };
}

// バリデーション
const validate = values => {
  const errors = {};
  
  // 未入力の時エラー
  if (!values.userId) errors.userId = 'ユーザーIDを入力してください';
  
  // 未入力の時エラー
  if (!values.password) errors.password = 'パスワードを入力してください';
  
  return errors;
};

// redux
const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = ({ postLogin });

// export
export default withStyles(useStyleForCC)(connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  validate,
  form: 'loginForm'
})(LoginPage)));