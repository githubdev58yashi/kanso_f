import React from 'react';
import SearchField from './index';
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
  title: 'organisms/SearchField',
  component: SearchField,
};

const Template = (args) => 
<Provider store={store}>
  <Router history={history}>  
    <SearchField />
    </Router>
</Provider>
;

export const basic = Template.bind({});
basic.storyName = '検索フィールド';