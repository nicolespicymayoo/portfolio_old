import React from 'react';
import './Homepage.css';

export const Homepage = React.createClass({
	render(){
		return(
			<div>
				<div className="homepage-header">
					<p>We'll help make your dream site<br>
					 <span>come to life.</span></br>
					 </p>
				</div>
				<div className="homepage-collage">
					<div className="collage-section" id="collage__our-approach">
						<div className="collage-section-details">
							<div className="collage-header" id="collage-header__our-approach">
								Our Approach
							</div>
							<p>We work with you to figure out your dream website,
								then bring that vision to life. With our deep
								understanding of website building and full-stack skills,
								we can bring your vision to life with flawless functionality.
							</p>
						</div>
						<div className="collage-section-image">
							<img src="/consultation.jpg"/>
						</div>
					</div>
					<div className="collage-section" id="collage__about-us">
						<div className="collage-seciton-image"></div>
						<div className="collage-section-details">
							
							<div className="collage-header" id="collage-header__homepage">
								About Us
							</div>
							<p>
								We are web developers with a wide range of knowledge
								 in both front end and back end development. 
							</p>
						</div>
					</div>
					<div className="collage-section-bottom">
					</div>

				</div>
			</div>
		)
	}
});