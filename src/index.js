import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // CSS
import 'bootstrap/dist/js/bootstrap.bundle'; // JS

const container = document.querySelector('#root');
ReactDOM.createRoot(container).render(<App />)
