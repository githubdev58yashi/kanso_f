import React from 'react';
// react-redux
import { connect } from 'react-redux';
// router-dom
import history from '../../../history/history.js';
// store
import store from '../../../store/store.js';
// actions
import { readImpressions } from '../../../actions';
// checkLogin
import checkLogin from '../../../checkLogin';
// material-ui components
import { Box } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// my components
import MyAppBar from '../../organisms/MyAppBar';
import Impression from '../../organisms/Impression';
import MyBottomNavigation from '../../organisms/MyBottomNavigation';
// css
import useStylesForCC from './useStylesForCC';
import { withStyles } from '@material-ui/core/styles';

// class
class ImpressionsPage extends React.Component {
  // コンストラクタ
  constructor(props) {
    super(props);
    // console.log("===== ImpressionsPage - constructor =====");

    // ログイン情報のチェック TODO:ログイン処理実装時に削除
    checkLogin();

    // 感想検索
    this.props.readImpressions();
    // console.log(store.getState());
  };

  // 感想一覧表示
  renderImpressions() {
    // console.log("===== ImpressionsPage - renderImpressions =====");
    // TODO: stateの取得方法が正しいかわからない。後で勉強する。
    let impressions = store.getState().impressions;
    // console.log(impressions);

    let renderField = [];

    impressions.forEach((impression, index) => {
      // console.log(impression)
      // console.log(index)

      renderField.push(
        <Impression
          key={index}
          impression={impression}
        />
      );

    });

    return renderField;
  };

  // ページネーションクリック
  handlePaginationChange(event, value) {
    // console.log("===== ImpressionsPage - handlePaginationChange =====");
    // console.log(value);
    // console.log(this.props.location);

    // ページ遷移
    history.push(this.props.location.pathname + "?p=" + value);
  };

  // 表示
  render() {
    // console.log("===== ImpressionPage - render =====");
    // console.log(history);
    // TODO: stateの取得方法が正しいかわからない。後で勉強する。
    // console.log(store.getState());

    return (
      <React.Fragment>
        {/* アプリバー */}
        <MyAppBar />

        <Box
          className={ this.props.classes.main }
          component="div"
          p={ 1 }
        >
          {/* 感想 */}
          { this.renderImpressions() }

          {/* ページナビゲーション */}
          <Pagination
            className={ this.props.classes.pagination }
            count={10}
            onChange={(event, value) => {this.handlePaginationChange(event, value)}}
          />
        </Box>

        {/* 追加ボタン */}
        <Fab
          className={ this.props.classes.addFab }
          aria-label="add"
        >
           <AddIcon/>
        </Fab>

        {/* ボトムナビゲーション */}
        <MyBottomNavigation />
      </React.Fragment>
    );
  }
};

// redux
const mapStateToProps = state => ({
  impressions: state.impressions,
});

const mapDispatchToProps = ({ readImpressions });
export default withStyles(useStylesForCC)(connect(mapStateToProps, mapDispatchToProps)(ImpressionsPage));