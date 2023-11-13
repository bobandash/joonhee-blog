import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import '@fortawesome/fontawesome-free'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
