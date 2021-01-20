/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail.jsx';
import css from './styles.css';

const appEl = document.getElementById('app');
const itemNum = 7574;
const userNum = 1149;

ReactDOM.render(<MainProductDetail itemNum={itemNum} userNum={userNum} />, appEl);
