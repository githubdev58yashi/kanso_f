import React from 'react';
import Impression from './index';
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
// mockdata
import { impressions } from '../../../mock/datas';

// storeを生成
//  第２引数にthunkを渡す
const store = createStore(reducer, applyMiddleware(thunk));

export default {
  title: 'organisms/Impression',
  component: Impression,
};

const impressionProp = impressions[0];

const Template = (args) => 
<Provider store={store}>
  <Router history={history}>  
    <Impression
      impression={impressionProp}
    />
  </Router>
</Provider>
;

export const basic = Template.bind({});
basic.storyName = '標準';