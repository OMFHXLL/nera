import React from 'react';
import ReactDOM from 'react-dom/client';
import MyConsole from './console';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyConsole/>
    <App />
  </React.StrictMode>
);