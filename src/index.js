import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './Components/NavigationBar';
import Main from './Components/Main';
import Footer from './Components/Footer';
ReactDOM.render(
  <React.StrictMode>
    <NavBar/>
    <Main/>
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);