import React from 'react';
// react-redux
import { connect } from 'react-redux';
// actions
import { readImpression } from '../../../actions';
// react-router-dom
import { Link } from 'react-router-dom'
import history from '../../../history/history.js';
// store
import store from '../../../store/store.js';
// material-ui components
import Box from '@material-ui/core/Box';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'
import Rating from '@material-ui/lab/Rating';
// my compoents
import MyAppBar from '../../organisms/MyAppBar';
import MySecondaryAppBar from '../../organisms/MySecondaryAppBar';
import Book from '../../organisms/Book';
import HashTag from '../../atoms/HashTag';
import MyBottomNavigation from '../../organisms/MyBottomNavigation';
import Account from '../../organisms/Account';
// css
import useStylesForCC from './useStylesForCC';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
// checkLogin
import checkLogin from '../../../checkLogin';

class ImpressionPage extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);

    // ログイン情報のチェック TODO:ログイン処理実装時に削除
    checkLogin();

    // param取得
    let params = this.props.match.params;
    // console.log(this.props);
    // console.log(params.impressionId);
    // let path = myHistory.pathname;
    // console.log(path);
    // 検索
    this.props.readImpression(params.impressionId);
  }

  // アプリバー表示設定
  renderAppBar() {
    // storeから書籍情報を取得
    let impression = store.getState().impression;

    // スマホの時に専用のアプリバーを表示する
    // デスクトップは通常のアプリバーを表示する
    return (
      <React.Fragment>
        {/* デスクトップ */}
        <Box component="span" className={ this.props.classes.sectionDesktop }>
          <MyAppBar />
        </Box>

        {/* モバイル */}
        {/* デスクトップ */}
        <Box component="span" className={ this.props.classes.sectionMobile }>
          <MySecondaryAppBar
            impression={impression}
          />
        </Box>
      </React.Fragment>
      
    );
  }

  renderMySelfField() {
    // 自分の投稿の時、かつ、デスクトップ表示の時にのみ表示
    // console.log("renderMySelfField");

    let user = store.getState().login.user;
    let impressionUser = store.getState().impression.user;
    // console.log(user);
    // console.log(impression);

    // let renderField = null;
    // let loginUserId = user.userId;
    // let impressionUserId = impression.user.userId;

    // path
    let path = this.props.location.pathname;

    if (user.userId == impressionUser.userId ) {
      return (
        <Box component="div" className={ this.props.classes.mySelfField }>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<EditIcon/>}
            component={Link}
            to={`${path}?mode=edit`}
            >
              投稿を編集
            </Button>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<DeleteIcon/>}
              onClick={() => {console.log("onclick")}}
            >
              投稿を削除
          </Button>

        </Box>
      )
      
    }
    else {
      return null;
    }


  };

  // 表示
  render() {
    // storeから書籍情報を取得
    let impression = store.getState().impression;

    return (
      <React.Fragment>
        {/* アプリバー */}
        { this.renderAppBar() }

        <Box
          className={ this.props.classes.main }
          component="div"
          p= { 1 }
        >
          {/* 感想タイトル */}
          <Typography
            variant="h6"
          >
            {impression.title}
          </Typography>

          {/* 投稿編集、削除ボタン */}
          { this.renderMySelfField() }

          {/* ユーザー */}
          <Account
            user={ impression.user }
          />

          <Box component="div" className={ this.props.classes.ratingAndUpdateDate}>
            {/* レーティング */}
            <Rating
              readOnly
              value={impression.ratioValue}
            />

            {/* 更新日 */}
            <Typography
              className={ this.props.classes.updateDate }
              variant="body2"
            >
              {impression.updateDate}
            </Typography>
          </Box>

          {/* 書籍情報 */}
          <Book
            book={ impression.book }
          />

          {/* ハッシュタグ */}
          <HashTag
            tags={ impression.tags }
          />

          {/* 感想本文 */}
          <Box component="div" className={ this.props.classes.text }
          >
            <Typography
              variant="body1"
            >
              { impression.text }
            </Typography>
          </Box>
          
        </Box>

        {/* ボトムナビゲーション */}
        <MyBottomNavigation />
        
      </React.Fragment>
    );
  }
}

// redux
const mapStateToProps = state => ({
  impression: state.impression,
});

const mapDispatchToProps = ({ readImpression });
export default withStyles(useStylesForCC)(connect(mapStateToProps, mapDispatchToProps)(ImpressionPage));