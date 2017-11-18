import React, { Component } from 'react';
import '_header.scss';

export default class Header extends Component {
	render() {
		return(
			<section id="header">
				<div id="logo">
					<img src="../assets/logoStripes.png" alt="YLC logo with stripes"></img>
				</div>
				<div id="title">
					<div id="title_text">youth leadership conference</div>
				</div>
				<div id="sponsor">
					<div>a conference presented by the</div>
					<div>
						<a href="http://rpymcs.com" target="_blank">Youth Ministries Committee of Synod</a>
					</div>
				</div>
			</section>
		)
	}
}
