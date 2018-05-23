import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import AppRoutes from './AppRoutes';

import './sass/main.scss';

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import colorsReducer from './reducers/colorsReducer';

const rootReducer=combineReducers({colors:colorsReducer});

const store=createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><AppRoutes /></Provider>, document.getElementById('root'));
registerServiceWorker();