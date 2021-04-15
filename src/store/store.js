import React from 'react';
// redux
import { createStore, applyMiddleware } from 'redux';
// reducer
import reducer from '../reducers';
// thunk
import thunk from 'redux-thunk';

// storeを生成
//  第２引数にthunkを渡す
const store = createStore(reducer, applyMiddleware(thunk));

export default store;