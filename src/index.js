import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {title} from './App.jsx';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <h1>I love learning react
    </h1>
    <p>Hello world</p>
    {title}
  </div>,
  document.getElementById('root')
);


reportWebVitals();
