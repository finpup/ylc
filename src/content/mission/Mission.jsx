import React, { Component } from 'react';
import '_mission.scss';

export default class Mission extends Component {
	render() {
		return(
			<section id="mission">
				<div id="whatIsYLC">
					<div className="whatIsYLC_header">
						<div className="whatIsYLC_header__text">What is YLC?</div>
					</div>
					<div className="whatIsYLC_body">
						<div className="whatIsYLC_body__text">Why is Christian leadership important?</div>
						<div className="whatIsYLC_body__text">How can I serve the church as I transition to the next phase of my life?</div>
						<div className="whatIsYLC_body__text">What impact does a relationship with Christ have on my decisions?</div>
						<div className="whatIsYLC_body__text">The goal of YLC is to provide a unique opportunity for you, Christian young adults, to hear and respond to a serious call to a life of service to Jesus Christ and grow in leadership.</div>
					</div>
				</div>
			</section>
		)
	}
}
