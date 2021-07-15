import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Iremos passa a props name que será renderizada no componente pai e a props footer
// Que será renderizada no componente filho
ReactDOM.render(
  <React.StrictMode>
    <App 
      primeira={"Essa props será renderizada no App.js"} 
      segunda={"Essa props será renderizada no ComponentFilho.js"}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
