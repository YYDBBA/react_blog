import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './router/Router';
import { Store } from './redux/context'

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);