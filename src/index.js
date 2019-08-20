import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// Redux & Reducers
import { createStore, combineReducers } from 'redux';
import userReducer from './store/reducers/userReducer';
import todoReducer from './store/reducers/todoReducer';
import messagesReducer from './store/reducers/messagesReducer';
import fileMngrReducer from './store/reducers/fileMngrReducer';
import contactReducer from './store/reducers/contactsReducer';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
	messages: messagesReducer,
	files: fileMngrReducer,
	contacts: contactReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
