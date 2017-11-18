import React, { Component } from 'react';
import '_nav.scss';

export default class Nav extends Component {
	render() {
		return(
			<nav>
        <div className="navLink">Speaker</div>
        <div className="navLink">Schedule</div>
        <div className="navLink">Workshops</div>
        <div className="navLink">Pricing</div>
      </nav>
		)
	}
}
