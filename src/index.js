import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { requestRobots, searchRobots } from './store/reducers'

import './index.css';


const logger = createLogger();
const rootReducers = combineReducers({ requestRobots, searchRobots });
const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
