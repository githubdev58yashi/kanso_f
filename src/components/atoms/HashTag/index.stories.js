/**
 * (2021/04/07)
 * 本来、LoginComponetをpresentationとcontainerに分けて、
 * storybookではモックを渡すことでstoreを使用せずに表示することができるらしい。
 * 今回は時間の関係上、そのままstoreごと読み込んで実装する。
 */

 import React from 'react';
 import HashTag from './index';
 // redux
 import { createStore, applyMiddleware } from 'redux';
 import { Provider } from 'react-redux';
 // reducer
 import reducer from '../../../reducers';
 // thunk
 import thunk from 'redux-thunk';
 
 // storeを生成
 //  第２引数にthunkを渡す
 const store = createStore(reducer, applyMiddleware(thunk));
 
 export default {
   title: 'atoms/HashTag',
   component: HashTag,
 };

 const tags = ["React", "プログラミング"];
 
 const Template = () =>
   <Provider store={store}>
     <HashTag
      tags={tags}
     />
   </Provider>
 ;
 
export const hashTag = Template.bind({});