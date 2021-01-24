/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail/MainProductDetail.jsx';
import './indexS.css';

const appEl = document.getElementById('root');
const itemNum = 2408; // 2129
const userNum = 1163;

ReactDOM.render(<MainProductDetail itemNum={itemNum} userNum={userNum} />, appEl);
