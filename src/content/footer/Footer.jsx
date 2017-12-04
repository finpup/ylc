import React, { Component } from 'react';
import '_footer.scss';

export default class Footer extends Component {
	render() {
		return(
			<div id="footer">
        <div id="footer__info">
          <div id="footer__info__img">
            <img src="../assets/footerLogo.png" alt="" />
          </div>
          <div id="footer__info__title">youth leadership conference 2018</div>
        </div>
        <div id="footer__registration">
          <div className="register">
            <a href="https://rpmissions.wufoo.com/forms/z1fawgp81q9rvvn/" target="_blank">
              <div className="register__btn">
                <div className="register__btn__text">register</div>
              </div>
            </a>
          </div>
        </div>
      </div>
		)
	}
}
