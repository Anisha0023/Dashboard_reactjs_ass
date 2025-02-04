import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import './index.css';
import App from './App';
import userReducer from "./components/UserSlice"; 
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <BrowserRouter>
//     <App/>
//   </BrowserRouter>
// );
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
