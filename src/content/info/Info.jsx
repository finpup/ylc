import React, { Component } from 'react';
import Nav from 'content/info/Nav';
import Register from 'content/info/Register';
import '_info.scss';

export default class Info extends Component {
	render() {
		return(
			<section id="info">
        <Nav />
				<div id="pertinents">
					<div id="pertinents_wrapper">
						<div className="pertinents__line">
							<div className="pertinents__line__text">ages 18-24</div>
						</div>
						<div className="pertinents__line">
							<div className="pertinents__line__text">July 5-8, 2018</div>
						</div>
						<div className="pertinents__line">
							<div className="pertinents__line__text">Beaver Falls, Penn.</div>
						</div>
					</div>
				</div>
				<div id="video">
					<video src="../assets/YLC-WebsiteColor.mp4" autoPlay loop width="450" />
				</div>
				<Register />
      </section>
		)
	}
}
