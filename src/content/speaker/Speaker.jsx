import React, { Component } from 'react';
import '_speaker.scss';

export default class Speaker extends Component {
	render() {
		return(
			<section id="speaker">
				<div className="topic">
					<div className="topic__label">
						<div className="topic__label__text">topic</div>
					</div>
					<div className="topic__name">
						<div className="topic__name__text">Do you love me?</div>
						<div className="topic__name__scripture">John 21</div>
					</div>
				</div>
				<div className="speaker">
					<div className="speaker__img">
						<div className="speaker__img__stripes"></div>
						<img src="../assets/a_quigley.jpg" alt="Andrew Quigley profile" />
					</div>
					<div className="speaker__profile">
						
					</div>
				</div>
			</section>
		)
	}
}
