import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import 'react-toastify/dist/ReactToastify.css';
import './index.css'; 
import { ToastContainer } from 'react-toastify';

const Root = () => (
  <>
    <App />
    <ToastContainer position='top-center'/>
  </>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)