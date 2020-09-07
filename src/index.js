import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import Quiz from './components/Quiz';

ReactDOM.render(
  <React.StrictMode>
    <Router>
       <Quiz />
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);


