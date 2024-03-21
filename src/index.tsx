import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import { AlertProvider } from './context/AlertContext'
import reportWebVitals from './reportWebVitals'
import { initLang } from "./lang/i18n.js";
import i18n from 'i18next';

initLang();
ReactDOM.render(
  <React.StrictMode>
    <AlertProvider>
       <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
