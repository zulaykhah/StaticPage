import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import './src/Style.css';
import Footer from './Components/Footer';
import MainContents from './Components/MainContents';
import Header from './Components/Header';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header/>
    <MainContents/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
