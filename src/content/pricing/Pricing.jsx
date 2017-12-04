import React, { Component } from 'react';
import PricingCard from 'content/pricing/PricingCard';
import PriceData from 'content/pricing/Pricing.json';
import '_pricing.scss';

export default class Pricing extends Component {
	render() {
		return(
			<section id="pricing">
				<div id="pricing__header">
					<div id="pricing__header__text">pricing</div>
				</div>
				<div id="pricing__body">
					{ PriceData.map( (card, index) => <PricingCard cardInfo={ card } key={ index } />)}
				</div>
			</section>
		)
	}
}
