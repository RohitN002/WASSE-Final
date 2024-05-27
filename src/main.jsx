import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./i18n/i18n.js";

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <React.Suspense >
 <App />
 </React.Suspense>
  </React.StrictMode>
 
  
)
