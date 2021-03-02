import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";

import {configStore} from './store/configStore';


import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={configStore({})}>
    <BrowserRouter basename='/app/'>
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
