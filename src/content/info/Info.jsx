import React, { Component } from 'react';
import Nav from 'content/info/Nav';
import Register from 'content/info/Register';
import '_info.scss';

export default class Info extends Component {

	componentDidMount() {
		var video = document.getElementById("introVid");
		video.play();
	}

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
					<video id="introVid" autoPlay muted loop playsInline width="450px" poster="../assets/poster.png">
						<source src="../assets/YLC-WebsiteColor.webm" type="video/webm; codecs=vp8" />
						<source src="../assets/YLC-WebsiteColor.mp4" type="video/mp4; codecs=avc1.42E01E" />
					</video>
				</div>
				<Register />
      </section>
		)
	}
}
