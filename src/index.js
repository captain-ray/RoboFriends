import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import CardList from './CardList';
import { robots } from './robot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CardList robots={robots} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
