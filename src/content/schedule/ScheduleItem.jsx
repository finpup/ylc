import React, { Component } from 'react';

export default class ScheduleItem extends Component {
	render() {
		return(
			<div className="day__schedule__scheduleItem">
        <div className="day__schedule__scheduleItem__time">{ this.props.item[0]}</div>
        <div className="day__schedule__scheduleItem__text">{ this.props.item[1]}</div>
			</div>
		)
	}
}
