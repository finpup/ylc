import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'content/header/Header';
import Info from 'content/info/Info';
import Mission from 'content/mission/Mission';
import Speaker from 'content/speaker/Speaker';
import Schedule from 'content/schedule/Schedule';
import Pricing from 'content/pricing/Pricing';
import 'styles.scss';

export default class App extends Component {
	render() {
		return(
			<div id="wrapper">
				<Header />
				<Info />
				<Mission />
				<Speaker />
				<Schedule />
				<Pricing />
			</div>
		)
	}
}
