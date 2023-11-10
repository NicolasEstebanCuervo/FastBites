import React from 'react';
import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Gloock', serif;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);