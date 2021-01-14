import React from 'react';
import ReactDOM from 'react-dom';
import MainProductDetail from './components/MainProductDetail.jsx';

const appEl = document.getElementById('app');
const itemNum = 10276;

ReactDOM.render(<MainProductDetail itemNum={itemNum} />, appEl);
