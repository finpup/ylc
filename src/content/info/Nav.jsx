import React, { Component } from 'react';
import '_nav.scss';

var scrollToElement = require('scroll-to-element');

export default class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.navigatePage = this.navigatePage.bind(this);
	}

	navigatePage(btn){
		const offsetVal = -50;
		switch (btn) {
			case 'speaker':
				scrollToElement('#speaker', {
					offset: offsetVal,
				})
				break;
			case 'schedule':
				scrollToElement('#schedule', {
					offset: offsetVal,
				})
				break;
			case 'workshops':
				scrollToElement('#workshops', {
					offset: offsetVal,
				})
				break;
			case 'pricing':
				scrollToElement('#pricing', {
					offset: offsetVal,
				})
				break;
			default:

		}
	}

	render() {
		return(
			<nav>
        <div id="speakerBtn" className="navLink" onClick={this.navigatePage.bind(this, "speaker")}>Speaker</div>
        <div id="scheduleBtn" className="navLink" onClick={this.navigatePage.bind(this, "schedule")}>Schedule</div>
        {/* <div id="workshopsBtn" className="navLink" onClick={this.navigatePage.bind(this, "workshops")}>Workshops</div> */}
        <div id="pricingBtn" className="navLink" onClick={this.navigatePage.bind(this, "pricing")}>Pricing</div>
      </nav>
		)
	}
}
