import React from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component {
  // コンポーネントが再レンダーされた時に呼ばれる
  componentDidUpdate() {
    
    // 画面トップにスクロールする
    window.scrollTo(0,0);
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);