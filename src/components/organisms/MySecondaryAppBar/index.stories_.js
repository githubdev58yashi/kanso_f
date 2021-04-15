import React from 'react';
import MySecondaryAppBar, { MySecondaryAppBarPresenter } from './index';
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

import { impressions } from '../../../mock/datas';

// storeを生成
//  第２引数にthunkを渡す
const store = createStore(reducer, applyMiddleware(thunk));

export default {
  title: 'organisms/MySecondaryAppBar',
  component: MySecondaryAppBar,
};

const impression = impressions[0];


const myselfUser = {
  userId: impression.user.userId,
  userName: impression.user.userName,
}

const otherUser = {
  userId: "storyBookUserId",
  userName: "storyBookUserName",
}

store.getState().login.user = myselfUser;
// storeにデータを設定
store.getState().impression = impression;

const Template = (args) => 
<Provider store={store}>
  <Router history={history}>  
    <MySecondaryAppBar
      {...args}
    />
    </Router>
</Provider>
;

export const myself = Template.bind({});
myself.storyName = 'アプリバー(自分の投稿)';
myself.args={
  user: myselfUser,
  impression: impression,
};

export const other = Template.bind({});
other.storyName = 'アプリバー';
other.args={
  user: otherUser,
  impression: impression,
};
