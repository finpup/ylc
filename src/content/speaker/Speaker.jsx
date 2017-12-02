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
					<div className="speaker-wrapper">
						<div className="speaker__img">
							<div className="speaker__img__stripes"></div>
							<img src="../assets/SAQ_Nov17-2059_2.jpg" alt="Andrew Quigley profile" />
						</div>
						<div className="speaker-right">
							<div className="speaker__header">
								<div className="speaker__header__label">speaker</div>
								<div className="speaker__header__text">Andrew Quigley</div>
							</div>
							<div className="speaker__profile">
								<div className="speaker__profile__text">Rev. Andrew Quigley has been a minister in  the Airdrie RP church in Scotland since 1994. He has spoken at a number of RPCNA family conferences and youth retreats.</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
