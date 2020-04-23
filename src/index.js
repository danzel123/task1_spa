import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {Provider} from "react-redux";
import store from './store';
import 'semantic-ui-css/semantic.min.css'



const  storeObj = store();

ReactDOM.render(
    <Provider store={storeObj}>
        <App />
    </Provider>,
  document.getElementById('root')
);