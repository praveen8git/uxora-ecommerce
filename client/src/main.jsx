import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/js/bootstrap.min.js'
// import "react-toastify/dist/ReactToastify.css";
// import * as bootstrap from 'bootstrap'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
