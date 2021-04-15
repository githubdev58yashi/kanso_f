import React from 'react';
import Account, { AccountByDrawer } from './index';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// reducer
import reducer from '../../../reducers';
// thunk
import thunk from 'redux-thunk';
// react-router-dom
import { Router } from 'react-router-dom'
// history
import history from '../../../history/history.js';
 
 // storeを生成
 //  第２引数にthunkを渡す
 const store = createStore(reducer, applyMiddleware(thunk));
 
 export default {
   title: 'organisms/Account',
   component: Account,
 };


const Template = (args) =>
<Provider store={store}>
  <Router history={history}>  
    <Account {...args} />
    </Router>
</Provider>
;

 const TemplateByDrawer = (args) =>
<Provider store={store}>
  <Router history={history}>  
    <AccountByDrawer {...args} />
    </Router>
</Provider>
;
 
 export const account = Template.bind({});
 account.storyName = '通常';

 export const accountByDrawer = TemplateByDrawer.bind({});
 accountByDrawer.storyName = "ドロワー表示";