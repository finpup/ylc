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
						<div className="whatIsYLC_body__text">What is Christian leadership?</div>
						<div className="whatIsYLC_body__text">How can I serve the church as I transition from being a teenager to an adult?</div>
						<div className="whatIsYLC_body__text">How does my relationship with Christ affect my life?</div>
						<div className="whatIsYLC_body__text">The goal of YLC is to provide a unique opportunity for you, Christian young adults, to hear and respond to a serious call to a life of service to Jesus Christ and grow in leadership.</div>
					</div>
				</div>
			</section>
		)
	}
}
