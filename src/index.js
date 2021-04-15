import React from 'react';
import { render } from 'react-dom';
// redux
import { Provider } from 'react-redux';
// router-dom
import {Route, Router, useLocation } from 'react-router-dom';
// history
import history from './history/history.js';
// material-ui
import CssBaseLine from '@material-ui/core/CssBaseline';
import { ThemeProvider  } from '@material-ui/styles/';
import myTheme from './myTheme';
// Pages
import LoginPage from './components/pages/LoginPage';
import ImpressionPage from './components/pages/ImpressionPage';
import ImpressionsPage from './components/pages/ImpressionsPage';
// store
import store from './store/store';
// scroll
import ScrollToTop from './ScrollToTop';
// slideRoutes
// import SlideRoutes from 'react-slide-routes';


/**
 * ■material-ui
 *  ・ThemeProvider
 *  ・CssBaseLine
 * ■redux
 *  ・Provider
 * ■router-dom
 *  ・Router
 *     ※BrouserRouterだとhistory.pushでエラーが発生するため、Routerを使用する。
 *  ・Route
 *     ※exactでpathに指定した文字列と完全一致した場合のみコンポーネントを返す。
 */
 render(
  <ThemeProvider theme={myTheme}>
    <CssBaseLine />
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop />
        {/* <SlideRoutes location={location}> */}
        <React.Fragment>
          {/* <Route exact path='/impressions' component={Impressions}></Route> */}
          <Route component={LoginPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route exact path='/impressions' component={ImpressionsPage}></Route>
          <Route path='/impressions/:id' component={ImpressionsPage}></Route>
          <Route path='/impression/:impressionId' component={ImpressionPage}></Route>
          {/* <Route exact path='/sampleReduxForm' component={SampleReduxForm}></Route>
          <Route exact path='/sampleReduxForm2' component={SampleReduxForm2}></Route> */}
          <Route exact path='/' component={LoginPage}></Route>
        </React.Fragment>
        {/* </SlideRoutes> */}
      </Router>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);