import React from 'react';
// redux
import store from '../../../store/store.js';
// react-router-dom
import { Link } from 'react-router-dom'
// material-ui components
// AppBar
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
// Drawer
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
// my components
import SearchField from '../SearchField';
import { AccountByDrawer } from '../Account';
// css
import useStyles from './useStyles';
// checkLogin
import checkLogin from '../../../checkLogin';


const MyAppBar = (props) => {
  // console.log("myAppBar");

  // containerの第一引数としてpresenterをコールバック関数として渡す
  // containerとpresenterを分けることにより、見た目のみの変更、処理のみの変更と分けることができる
  return (
    <MyAppBarContainer
      presenter={
        presenterProps => 
        <MyAppBarPresenter
          { ...presenterProps }
        />
      }
      { ...props }
    />
  );
}

// container
const MyAppBarContainer = ({
  presenter,
  ...props
}) => {
  // console.log("container");

  // ログイン情報のチェック TODO:ログイン処理実装時に削除
  checkLogin();

  // ドロワーの表示切り替えはHookを使う
  const [ open, setOpen ] = React.useState(false);

  // storeからuserを取得
  const user = store.getState().login.user;

  // ドロワーの表示切り替え
  const handleDrawerOpen = () => {
    //console.log("open");
    setOpen(true);
  };
  const handleDrawerClose = () => {
    //console.log("close");
    setOpen(false);
  };

  // presenterに渡す
  return presenter({
    open,
    user,
    handleDrawerOpen,
    handleDrawerClose,
    ...props,
  });
};

// presenter
const MyAppBarPresenter = (props) => {
  // console.log("presenter");

  const { open, user, handleDrawerOpen, handleDrawerClose } = props;
  // console.log(user);
  // css取得
  const classes = useStyles();

  return (
    <React.Fragment>
      {/* アプリバー */}
      <AppBar
        className={ classes.root }
        position="fixed"
      >
        <ToolBar>
          {/* メニューアイコンボタン */}
          <IconButton
            className={ classes.menuIcon }
            color="inherit"
            aria-label="menu"
            onClick={ handleDrawerOpen }
          >
            <MenuIcon />
          </IconButton>

          {/* 検索フィールド */}
          <SearchField/>
          {/* その他ボタン（お気に入り、通知、アカウント） */}
          {/* デスクトップのみ表示 */}
          <Box component="div" className={ classes.appBarSectionDesktop }>
            {/* お気に入り */}
            <IconButton
              color="inherit"
            >
              <FavoriteIcon />
            </IconButton>

            {/* 通知 */}
            <IconButton
              color="inherit"
            >
              <NotificationsIcon />
            </IconButton>

            {/* アカウント */}
            <IconButton
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton>
          </Box>
        </ToolBar>
      </AppBar>

      {/* ドロワー（モバイル） */}
      <Box component="span" className={ classes.drawerSectionMobile }>
        <Drawer
          classes={{
            paper: classes.drawerPaperSectionMobile,
          }}
          open={ open }
          // onClose - backdrop(背景)をクリックした時にも閉じるように設定する
          onClose={ handleDrawerClose }
        >
          {/* ユーザープロファイル */}
          <AccountByDrawer />
          
          <Divider />
          {/* 共通リンク */}
          <CommonLinkListItems />
        </Drawer>
      </Box>

      {/* ドロワー（デスクトップ） */}
      <Box component="span" className={ classes.drawerSectionDesktop }>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaperSectionDesktop,
          }}
        >
          {/* サービス名 */}
          <ListItem className={ classes.drawerSectionDesktopTitleRoot } component={Link} to={"/impressions"}>
            <ListItemText classes={{ primary:classes.drawerSectionDesktopTitle }} primary="KANSO" />
          </ListItem>
          <Divider />
          {/* 「感想を書く」ボタン */}
          <Button
            variant="contained"
            color="secondary"
            className={ classes.writeImpressionButton }
            startIcon={ <AddIcon /> }
            component={ Link }
            to={ "/writeImpressions" }
          >
            感想を書く
          </Button>

          {/* 共通リンク */}
          <CommonLinkListItems />
        </Drawer>
      </Box>

    </React.Fragment>
  );
};

const CommonLinkListItems = () => {
  // console.log("CustomLinkImte")
  // ログイン情報のチェック TODO:ログイン処理実装時に削除
  checkLogin();

  // storeからuserを取得
  const user = store.getState().login.user;
  // console.log(store.getState())
  // console.log(user);
  // TODO: ページ更新時に「userid undefined」のエラー発生
  
  return (
    <React.Fragment>
      <ListItem button component={ Link } to={ "/impressions" }>
        <ListItemText primary="トップ" />
      </ListItem>
      <ListItem button component={ Link } to={ `/impressions/${ user.userId }/favorite`}>
        <ListItemText primary="お気に入り" />
      </ListItem>
      <ListItem button component={ Link } to={ `/impressions/${ user.userId }`}>
        <ListItemText primary="自分の投稿一覧" />
      </ListItem>
      <ListItem button component={ Link } to={ `/${user.userId}/notifications` }>
        <ListItemText primary="通知" />
      </ListItem>
      <Divider />
      <ListItem button component={ Link } to={ "/" }>
        <ListItemText primary="アカウント設定" />
      </ListItem>
      <ListItem button component={ Link } to={ "/" }>
        <ListItemText primary="ログアウト" />
      </ListItem>
    </React.Fragment>
  );
};

export default MyAppBar;