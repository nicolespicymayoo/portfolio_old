import React from 'react';
import './Homepage.css';
import '../../css/lib/fonts.css';

export const Homepage = React.createClass({
	render(){
		return(
			<div>
				<div className="homepage-header-img-gradient">
					<div className="homepage-header">
						<h1 className="homepage-header-title">Your Restaurant</h1>
						<h2 className="homepage-header-subtitle">by code and coffee studios</h2>
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
							<div className="reservations-image">
								<img src="whiterestaourantoutside.jpg"/>
							</div>
						</div>
						<div className="prominent-box-half">
							<div className="about-image"></div>
							<div className="about">
								<h3 className="prominent-box-title">About</h3>
								<p className="prominent-box-description">
									We are people from the world who do this stuff for a
									living. We know about ay bee and sea and use ex, whuy, and zee
									technology to solve it. We really have a passion for this, 
									and we love other things too! Also, coffee.
								</p>
								<p className="learn-more">learn more</p>
							</div>
						</div>
					</div>
				</div>
				<div className="homepage-specialties-image">
					<h3 className="specialties-header">Our Specialties</h3>
				</div>
				<div className="prominent-box-background two">
					<div className="prominent-box">
						<div className="prominent-box-half top">
							<div className="specialty-box item">
								<h4 className="specialty-box-title">Design</h4>
								<p className="prominent-box-description">
									Create a beautiful, innovative website that you and
									your customers will love.
								</p>
							</div>
							<div className="specialty-box image">
								
							</div>
							<div className="specialty-box item">
								<h4 className="specialty-box-title">Update</h4>
								<p className="prominent-box-description">
									Spice up your old site. Get a design makeover, 
									add new features for customers, or both! Either 
									way, your website will get a second life. 
								</p>
							</div>
							<div className="specialty-box image"></div>
						</div>
						<div className="prominent-box-half bottom">
							<div className="specialty-box image"></div>
							<div className="specialty-box item">
								<h4 className="specialty-box-title">Program</h4>
								<p className="prominent-box-description">
									
								</p>
							</div>
							<div className="specialty-box image"></div>
							<div className="specialty-box item">
								<h4 className="specialty-box-title">Maintain</h4>
								<p className="prominent-box-description">
									Make sure your website is up to date, bug free, and zero hassle. 
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="menu"></div>
			</div>
		)
	}
});