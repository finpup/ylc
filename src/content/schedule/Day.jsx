import React, { Component } from 'react';
import ScheduleItem from 'content/schedule/ScheduleItem';
import '_day.scss';

export default class Day extends Component {
	render() {
		var schedule = this.props.dayInfo.schedule;
		return(
			<div className="day">
				<div className="day__header">
					<div className="day__header__date">
						<div className="day__header__date__text">{ this.props.dayInfo.header.date }</div>
					</div>
					<div className="day__header__day">
						<div className="day__header__day__text">{ this.props.dayInfo.header.day }</div>
					</div>
					<div className="day__schedule">
						{ schedule.map( (item, index) => <ScheduleItem item={ item } key={ index } />) }
					</div>
				</div>
			</div>
		)
	}
}
