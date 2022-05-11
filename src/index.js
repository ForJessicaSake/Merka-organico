import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// using jsx to create react element
// const getCurrentDate = () => {
//     const date = new Date();
//     return date.toDateString();
// }


// const example = <h1> Hello World! current date: {getCurrentDate()} </h1>


ReactDOM.render( < App / > , document.getElementById('root'));