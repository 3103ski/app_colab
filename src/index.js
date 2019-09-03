// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import appReducer from './store/reducers/appReducer';
import userReducer from './store/reducers/userReducer';
import todoReducer from './store/reducers/todoReducer';
import projectsReducer from './store/reducers/projectsReducer';

// Components
import App from './App';

// Styles
import './index.css';

const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
	projects: projectsReducer,
	app: appReducer
});

const logger = store => {
	return next => {
		return action => {
			console.log(`[Middleware] Dispatching: `, action);
			const result = next(action);
			console.log(`[Middleware] next state: `, store.getState());
			return result;
		};
	};
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(logger, thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
