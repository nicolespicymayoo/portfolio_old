import React from 'react';
import './Homepage.css';
import '../../css/lib/fonts.css';

export const Homepage = React.createClass({
	render(){
		return(
			<div>
				<div className="header-background-image">
					<div className="overlay">
						<div className="homepage-header">
							<h1 className="title">Your Restaurant</h1>
							<h2 className="subtitle">by code and coffee studios</h2>
						</div>
					</div>
				</div>
				<div className="prominent-box-background">
					<div className="prominent-box one">
						<div className="prominent-box-half">
							<div className="reservations">
								<h3 className="prominent-box-title">Reservations</h3>
								<p className="prominent-box-description">
									Tell us a little bit about your 
									restaurant and what you are looking for. We will get
									back to you within a day.
								</p>
								<button className="contact-us-button">Contact Us</button>
							</div>
							<div className="picture-top">
								<img src="whiterestaourantoutside.jpg"/>
							</div>
						</div>
						<div className="prominent-box-half">
							<div className="picture-bottom"></div>
							<div className="about">
								<h3 className="prominent-box-title">About</h3>
								<p className="prominent-box-description">
									We are people from the world who do this stuff for a
									living. We know about ay bee and sea and use ex, whuy, and zee
									technology to solve it. We really have a passion for this, 
									and we love other things too! Also, coffee.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="prominent-box-background">
					<div className="specialties"></div>
				</div>
				<div className="menu"></div>
			</div>
		)
	}
});