import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import '../public/scripts/cms-event-listeners.js';

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <HelmetProvider>
    <App />
  </HelmetProvider>
 </React.StrictMode>,
)
