import React, { Component } from 'react';

export default class PricingCard extends Component {
	render() {
		return(
			<section className="pricingCard">
        <div className="pricingCard__price">{ this.props.cardInfo.price }</div>
        <div className="pricingCard__label">{ this.props.cardInfo.label }</div>
        <div className="pricingCard__dateRange">{ this.props.cardInfo.dateRange }</div>
			</section>
		)
	}
}
