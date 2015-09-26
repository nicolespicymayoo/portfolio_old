import React from 'react';
import './Homepage.css';

export const Homepage = React.createClass({
	render(){
		return(
			<div>
				<div className="homepage-header">
					<p>We'll help make your dream site<br>
					 come to life.</br>
					 </p>
				</div>
				<div className="homepage-collage">
					<div className="collage-section-top">
						<div className="collage-section-top__left">
							<div className="collage-section-header">Our Approach</div>
							<p>We work with you to figure out your dream website,
								then bring that vision to life. With our deep
								understanding of website building and full-stack skills,
								we can bring your vision to life with flawless functionality.
							</p>
						</div>
						<div className="collage-section-top-right"></div>
					</div>
					<div className="collage-section-middle">

					</div>
					<div className="collage-section-bottom">
					</div>

				</div>
			</div>
		)
	}
});