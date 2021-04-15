import React from 'react';
// redux
import store from '../../../store/store.js';
// react-router-dom
import { Link } from 'react-router-dom'
// material-ui components
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
// css
import useStyles from './useStyles';
// checkLogin
import checkLogin from '../../../checkLogin';

const MyBottomNavigation = () => {
  const classes = useStyles();

  // ログイン情報のチェック TODO:ログイン処理実装時に削除
  checkLogin();

  // storeからuserを取得
  const user = store.getState().login.user;
  // console.log(user);

  return (
    <BottomNavigation
      className={ classes.root }
      showLabels
    >
      <BottomNavigationAction
        className={ classes.action }
        component={ Link }
        to={ `/${ user.userId }/favorite` }
        label="お気に入り"
        icon={ <FavoriteIcon />} 
      />
      <BottomNavigationAction
        className={ classes.action }
        component={ Link }
        to="/impressions" 
        label="検索"
        icon={ <SearchIcon /> }
      />
       <BottomNavigationAction
        className={ classes.action }
        component={ Link }
        to={`/${ user.userId }/notifications`}
        label="通知"
        icon={ <NotificationsIcon /> }
      />
    </BottomNavigation>
  );
};

export default MyBottomNavigation;
