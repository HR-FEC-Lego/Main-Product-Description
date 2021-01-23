/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail.jsx';
import css from './styles.css';

const appEl = document.getElementById('app');
const itemNum = 2408; // 2129
const userNum = 1163;

ReactDOM.render(<MainProductDetail itemNum={itemNum} userNum={userNum} />, appEl);
