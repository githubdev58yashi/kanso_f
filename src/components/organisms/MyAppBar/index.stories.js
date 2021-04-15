import React from 'react';
import MyAppBar from './index';
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
  title: 'organisms/MyAppBar',
  component: MyAppBar,
};

const Template = (args) => 
<Provider store={store}>
  <Router history={history}>  
    <MyAppBar {...args} />
    </Router>
</Provider>
;

export const basic = Template.bind({});
basic.storyName = '標準';
