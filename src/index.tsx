import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Principal from './pages/Principal/Buscador'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Principal />
  </React.StrictMode>
);


