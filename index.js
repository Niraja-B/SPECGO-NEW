// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure this path is correct
import './index.css'; // Optional, if you have global styles
//import Review from './contexts/Review';
//import Slide from './components/Slide';
//import Line from './components/line';
//import Collection from './components/Collection';
//import Try  from './components/Try'

//import ShopByCategory from './components/ShopByCategory';
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

