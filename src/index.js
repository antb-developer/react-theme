import React from 'react';
import ReactDOM from 'react-dom/client';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import './index.css';
import './assets/css/metismenujs.min.css';
import './assets/css/mermaid.min.css';
import './assets/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import 'simplebar-react/dist/simplebar.min.css';
import './assets/css/app.min.css';
import './assets/css/icons.min.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
