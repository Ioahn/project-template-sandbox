import "reflect-metadata";

import React from 'react';
import ReactDOM from 'react-dom';

import { App } from '@views/root';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);