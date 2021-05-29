import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


ReactDOM.render(  
  <React.StrictMode>
    <h1>Open Positions</h1>
    <App/>
  </React.StrictMode>,
  // <button className = "Greeting" onClick = {
  //   function() {
  //     return axios.getUrl(); 
  //   }
  // }>
  //   Greet
  // </button>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
