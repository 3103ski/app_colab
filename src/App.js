import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';

import Dashboard from './containers/Dashboard/Dashboard';
import Todo from './containers/Todo/Todo';
import AllFilesBrowser from './containers/AllFilesContainer/AllFilesContainer';
import LiveStream from './containers/LiveStream/LiveStreamContainer';
import Contacts from './containers/ContactsContainer/ContactsContainer';
import Messages from './containers/MessageContainer/MessagesContainer';
import SongContainer from './containers/SongContainer/SongContainer';

function App() {
	return (
		<div className='App'>
			<Layout>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Route path='/todo' component={Todo}></Route>
				<Route path='/all-files' component={AllFilesBrowser}></Route>
				<Route path='/live-stream' component={LiveStream}></Route>
				<Route path='/messages' component={Messages}></Route>
				<Route path='/contacts' component={Contacts}></Route>
				<Route path='/projects' component={SongContainer}></Route>
			</Layout>
		</div>
	);
}

export default App;
