// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// Redux & Reducers
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import userReducer from './store/reducers/userReducer';
import todoReducer from './store/reducers/todoReducer';
import messagesReducer from './store/reducers/messagesReducer';
import fileMngrReducer from './store/reducers/fileMngrReducer';
import contactReducer from './store/reducers/contactsReducer';
import projectsReducer from './store/reducers/projectsReducer';
import appReducer from './store/reducers/appReducer';

// Components
import App from './App';

// Styles
import './index.css';

const rootReducer = combineReducers({
	user: userReducer,
	todo: todoReducer,
	messages: messagesReducer,
	files: fileMngrReducer,
	contacts: contactReducer,
	projects: projectsReducer,
	app: appReducer
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
