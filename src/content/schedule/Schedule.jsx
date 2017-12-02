import React, { Component } from 'react';
import Day from 'content/schedule/Day';
import ScheduleInfo from 'content/schedule/ScheduleInfo.json';
import '_schedule.scss';

export default class Schedule extends Component {

	render() {
		return(
			<section id="schedule">
				<div id="schedule__header">
					<div id="schedule__header__text">schedule</div>
				</div>
				<div id="schedule__body">
					{
						ScheduleInfo.map( (day, index) => <Day dayInfo={ day } key={ index } />)
					}
				</div>
			</section>
		)
	}
}
