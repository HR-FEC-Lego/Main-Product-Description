/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail/MainProductDetail';
import './indexS.scss';

const appEl = document.getElementById('root');
const itemNum = 1452; // 2408
const userNum = 1163;

ReactDOM.render(<MainProductDetail itemNum={itemNum} userNum={userNum} />, appEl);
