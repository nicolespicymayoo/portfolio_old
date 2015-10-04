import React from 'react';
import './ThankYouMessage.css';

export const ThankYouMessage = React.createClass({
	render(){
		return(
			<div className="thank-you-message">
				<p>Thank you for contacting us!</p>
				<p>We will be in touch with you via email within a day.</p>
				<p>We look forward to working together.</p>
			</div>
		)
	}
});