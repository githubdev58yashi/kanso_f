import React from 'react';
// react-router-dom
import { Link, useLocation } from 'react-router-dom'
import history from '../../../history/history.js';
// store
import store from '../../../store/store.js';
// material-ui components
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
// css
import useStyles from './useStyles';
// checkLogin
import checkLogin from '../../../checkLogin';

const MySecondaryAppBar = (props) => {
  return(
    <MySecondaryAppBarContainer
      presenter={
        presenterProps =>
          <MySecondaryAppBarPresenter
            { ...presenterProps }
          />
      }
      { ...props }
    />
  );
};

// container
const MySecondaryAppBarContainer = ({
  presenter,
  props
}) => {

  // // storeからstateを取得
  // const state = store.getState();


  //console.log("MySecondaryAppBarContainer");
  //console.log(user);
  //console.log(impression);

  // let loginUserId = Object.keys(state.login.user).lenth ? state.login.user.userId : "" ;

  // ログイン情報のチェック TODO:ログイン処理実装時に削除
  checkLogin();

  // storeからuserを取得
  const user = store.getState().login.user;
  console.log(user);
  // TODO: stateの取得方法が正しいかわからない。後で勉強する。
  let impression = store.getState().impression;
  console.log(impression);

  // let loginUserId =user.userId;
  // let impressionUserId = impression.user.userId;
  // // console.log(loginUserId == impressionUserId);

  // 自分の投稿か判定
  let isMyself = false;
  if (user.userId == impression.user.userId) {
    isMyself = true;
  } else {
    isMyself = false;
  }
  // console.log(isMyself);

  // ドロワーの表示切替
  const [ open, setOpen ] = React.useState(false);

  const handleDrawerOpen = () => {
    //"open")
    setOpen(true);
  }
  const handleDrawerClose = () => {
    //console.log("close")
    setOpen(false);
  }

  return presenter({
    isMyself,
    open,
    handleDrawerOpen,
    handleDrawerClose,
    ...props,
  });
};

// presenter
const MySecondaryAppBarPresenter = ({
  isMyself,
  open,
  handleDrawerOpen,
  handleDrawerClose,
  props
}) => {
  // css取得
  const classes = useStyles();

  // 現在のURL取得
  const path = useLocation().pathname;
  //console.log(path);

  // 自分の投稿の場合のみ表示
  const RenderMySelfField = (isMyself, props) => {
    // console.log(handleDrawerOpen);
    if (isMyself.isMyself) {
      return (
        <IconButton
          color="inherit"
          onClick={ handleDrawerOpen }
        >
          <MoreVertIcon />
        </IconButton>
      );
    } else {
      return null;
    }
  };

  return (
     
    <Box componet="span" className={ classes.sectionMobile }>
      {/* アプリバー */}
      <AppBar
        position="fixed"
      >
        <ToolBar>
        
        {/* 前画面に戻るボタン */}
        <IconButton
          color="inherit"
          onClick={() => history.goBack()}
        >
          <NavigateBeforeIcon />
        </IconButton>

          {/* 右寄せ */}
          <Box component="div" className={ classes.right }>

            {/* 共有ボタン */}
            <IconButton
              color="inherit"
            >
              <ShareIcon />
            </IconButton>

            {/* お気に入りボタン */}
            <IconButton
              color="inherit"
            >
              <FavoriteIcon />
            </IconButton>


            {/* その他ボタン */}
            <RenderMySelfField
              isMyself={ isMyself }
            />
          </Box>

        </ToolBar>
      </AppBar>

      {/* ドロワー */}
      <Drawer
        open={ open }
        onClose={ handleDrawerClose }
        anchor="bottom"
      >
        <ListItem button>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="投稿を削除する" />
        </ListItem>

        <ListItem button component={Link} to={`${path}?mode=edit`}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="投稿を編集する" />
        </ListItem>
      </Drawer>
    </Box>
  );
};

export default MySecondaryAppBar;
export { MySecondaryAppBarPresenter };