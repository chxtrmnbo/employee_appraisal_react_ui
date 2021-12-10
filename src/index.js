import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Reducers
import userReducer from "./features/user";
import appraisalsReducer from "./features/appraisals";



import './scss/custom.scss';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import App from './App';

const store = configureStore({
  reducer: {
    user: userReducer,
    appraisals: appraisalsReducer
  },
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
