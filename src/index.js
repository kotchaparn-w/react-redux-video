import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers'
import logger from 'redux-logger';

const createStoreWithMiddleware = createStore(reducers, applyMiddleware(promise));

ReactDOM.render(
    <Provider store={createStoreWithMiddleware}>
        <App />
    </Provider>,
document.getElementById('root'));
registerServiceWorker();
