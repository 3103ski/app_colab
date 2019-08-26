// REACT
import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Styles
import './App.css';

// HOCS
import Layout from './hoc/Layout/Layout';

// Main Containers
import Dashboard from './containers/DashboardContainer/Dashboard';
import Todo from './containers/TodoContainer/Todo';
import AllFilesBrowser from './containers/AllFilesContainer/AllFilesContainer';
import LiveStream from './containers/LiveStreamContainer/LiveStreamContainer';
import Contacts from './containers/ContactsContainer/ContactsContainer';
import Messages from './containers/MessageContainer/MessagesContainer';
import SongTemplate from './containers/SongContainer/SongContainer';

const App = props => {
	return (
		<div className='App'>
			<Layout>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Route path='/todo' component={Todo}></Route>
				<Route path='/all-files' component={AllFilesBrowser}></Route>
				<Route path='/live-stream' component={LiveStream}></Route>
				<Route path='/messages' component={Messages}></Route>
				<Route path='/contacts' component={Contacts}></Route>
				<Route
					path='/projects'
					render={() => {
						if (props.app.selectedSong !== '') {
							return <SongTemplate></SongTemplate>;
						} else {
							return <h1>Please Select A Song</h1>;
						}
					}}></Route>
			</Layout>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		app: state.app
	};
};

export default connect(mapStateToProps)(App);
