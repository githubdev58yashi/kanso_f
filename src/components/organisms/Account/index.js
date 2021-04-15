import React from 'react';
// store
import store from '../../../store/store.js';
// material-ui components
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// css
import useStyles from './useStyles';
// checkLogin
import checkLogin from '../../../checkLogin';

const Account = (props) => {
  // console.log(user);
  return(
    <AccountContainer
      presenter={
        presenterProps =>
          <AccountPresenter
            { ...presenterProps }
          />
      }
      { ...props }
    />
  );
}

const AccountByDrawer = (props) => {
  // console.log(user);
  return(
    <AccountContainer
      presenter={
        presenterProps =>
          <AccountByDrawerPresenter
            { ...presenterProps }
          />
      }
      { ...props }
    />
  );
}

// container
const AccountContainer = ({
  presenter,
  ...props
}) => {

  // ログイン情報のチェック TODO:ログイン処理実装時に削除
  checkLogin();

  // storeからuserを取得
  const user = store.getState().login.user;

  return presenter({
    user,
    ...props,
  });
};

// presenter
const AccountPresenter = ({
  user,
  ...props
}) => {
  const clsasses = useStyles();

  return (
    <Box 
      component="span"
      className={ clsasses.root }
    >
      {/* アバター */}
      <Avatar>
        { user.userName.slice(0, 1)}
      </Avatar>

      {/* ユーザー名 */}
      <Typography
        variant="body2"
        className={ clsasses.userName }
      >
        { user.userName }
      </Typography>
    </Box>
  );
};

// presenter
const AccountByDrawerPresenter = ({
  user,
  ...props
}) => {
  const classes = useStyles();

  return (
    <Box component="div">
      {/* アバター */}
      <Avatar
        className={ classes.drawerUserAvator }
      >
        {user.userName.slice(0, 1)}
      </Avatar>

      {/* ユーザー名 */}
      <Typography
        variant="h6"
      >
        {user.userName}
      </Typography>

      {/* ユーザーID */}
      <Typography
        className={classes.drawerUserId}
        variant="body2"
      >
        {user.userId}
      </Typography>
   </Box>
  );
}

export default Account;
export { AccountByDrawer };