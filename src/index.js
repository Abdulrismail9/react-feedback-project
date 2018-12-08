import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackList = (state = [], action) => {
    switch (action.type ) {
        case "GET_FEEDBACK":
            return action.payload;
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackList
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
