//Importing react from dependencies
import React from 'react';
//used to render to the index.html file
import ReactDOM from 'react-dom';
//importing the css file
import './index.css';
//importing the app Component.
import App from './App';

//rendering the app to the root div elemet.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
