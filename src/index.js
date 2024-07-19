import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.js'
import Home from './pages/user/Home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <App/>
    </Router>,
  <React.StrictMode>
    <Home/>
    
  </React.StrictMode>
);

