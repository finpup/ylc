import React, { Component } from 'react';
import '_footer.scss';

export default class Footer extends Component {
	render() {
		return(
			<div id="footer">
				<div id="footer__wrapper">
					<div id="footer__wrapper__info">
	          <div id="footer__wrapper__info__img">
	            <img src="../assets/footerLogo.png" alt="" />
	          </div>
	          <div id="footer__wrapper__info__title">youth leadership conference 2018</div>
	        </div>
	        <div id="footer__wrapper__registration">
	          <div className="register">
	            <a href="https://rpmissions.wufoo.com/forms/z1fawgp81q9rvvn/" target="_blank">
	              <div className="register__btn">
	                <div className="register__btn__text">register</div>
	              </div>
	            </a>
	          </div>
	        </div>
				</div>
				<div id="footer__contact">
					<div id="footer__contact__text">Questions?&nbsp;<a href="mailto:&#121;&#109;&#099;&#115;&#121;&#110;&#111;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;?subject=YLC%20question">&#121;&#109;&#099;&#115;&#121;&#110;&#111;&#100;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a></div>
					<div id="footer__contact__copyright">&#169;2018 Youth Ministries Committee of Synod</div>
				</div>
      </div>
		)
	}
}
