import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

function App() {
	return (
		<div className="App">
			<Layout>
				<Dashboard></Dashboard>
			</Layout>
		</div>
	);
}

export default App;
