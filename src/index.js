import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedbackList = (state = {
    pageUno: 0,
    pageDos: 0,
    pageTres: 0,
    pageQuatro: ''
}, action) => {
    switch (action.type ) {
        case "FEEDBACK_UNO":
            return {...state, pageUno: action.payload};
            case "FEEDBACK_DOS":
            return {...state, pageDos: action.payload};
            case "FEEDBACK_TRES":
            return {...state, pageTres: action.payload};
            case "FEEDBACK_QUATRO":
            return {...state, pageQuatro: action.payload};

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
