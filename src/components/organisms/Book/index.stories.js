/**
 * (2021/04/07)
 * 本来、LoginComponetをpresentationとcontainerに分けて、
 * storybookではモックを渡すことでstoreを使用せずに表示することができるらしい。
 * 今回は時間の関係上、そのままstoreごと読み込んで実装する。
 */

 import React from 'react';
 import Book from './index';
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
   title: 'organisms/Book',
   component: Book,
 };

 const bookData = {
  title: "Webデザインの見本帳",
  author: "森本友理/ラナデザインアソシエイツ",
  image: "https://thumbnail.image.rakuten.co.jp/@0_mall/book/cabinet/5266/9784844365266.jpg?_ex=120x120",
 }
 
 const Template = () =>
   <Provider store={store}>
     <Book
      book={bookData}
     />
   </Provider>
 ;
 
export const book = Template.bind({});
book.storyName = '通常';