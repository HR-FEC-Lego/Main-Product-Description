/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail/MainProductDetail';
import './indexS.scss';

const appEl = document.getElementById('MainProductDescription');
const itemNum = 10276; // 2408
const userNum = 1111;

ReactDOM.render(<MainProductDetail itemNum={itemNum} userNum={userNum} />, appEl);
