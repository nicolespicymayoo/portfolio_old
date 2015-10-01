import React from 'react';
import './Services.css';

export const Services = React.createClass({
	render(){
		
		return(
			<div className="services-page">

				<div className="service-page-header">
					Our Services
				</div>
				<p className="services-subtitle">
					using wordpress, meteor, react js, and mongoDB,<br>
					 we will work with you to develop your vision into reality. </br>
				</p>

				<div className="services-container">
					<div className="service design">
						<div className="icon">
							<i className="ion-image"></i>
						</div>
						<div className="service-title">Design</div>
						<p>
							we will take the time to understand your vision, and 
							create beautiful, clean, interactive front-end designs
						</p>
					</div>

					<div className="service program">
						<div className="icon">
							<i className="ion-android-laptop"></i>
						</div>
						<div className="service-title">Program</div>
						<p>
							provide back end functionality
							with real time features and reliable performance
						</p>
					</div>

					<div className="service update">
						<div className="icon">
							<i className="ion-compose"></i>
						</div>
						<div className="service-title">Update</div>
						<p>
							redesign, improve, innovate your website. increase SEO. 
							redesign to be mobile friendly 
						</p>
					</div>

					<div className="service maintain">
						<div className="icon">
							<i className="ion-settings"></i>
						</div>
						<div className="service-title">Maintain</div>
						<p>
							we'll maintian you website to ensure it's up to date with 
							the latest versions so it runs smoothly and bug-free
						</p>
					</div>
					
				</div>
			</div>
		)
	}
});