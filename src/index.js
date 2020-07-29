import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import './index.css';
import Card from './Card';
import {robots} from './robot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
  <div>
    {robots.map(robot=><Card id={robot.id} name={robot.name} email={robot.email}/>)}
  </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
