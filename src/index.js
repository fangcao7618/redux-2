// import 'babel-polyfill';
import 'amfe-flexible';
import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './routers/Layout';
import registerServiceWorker from './registerServiceWorker';

const rootElement = document.getElementById('root');
render(
    <App/>, rootElement);
registerServiceWorker();