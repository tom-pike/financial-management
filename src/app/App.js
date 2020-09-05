import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from '../pages/home';
import NetPayCalculator from '../pages/net-pay-calculators';

function App() {
	console.log('process.env.public_url', process.env.public_url);
	return (
		<Router basename="/financial-management">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route
					path="/calculators/salaried/net-pay"
					render={props => <NetPayCalculator {...props} employmentType={'salaried'} />}
				/>
				<Route
					path="/calculators/self-employed/net-pay"
					render={props => <NetPayCalculator {...props} employmentType={'selfEmployed'} />}
				/>
			</Switch>
		</Router>
	);
}

export default App;
