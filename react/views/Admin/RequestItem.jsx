import React from 'react';
import './RequestItem.css';

export const RequestItem = React.createClass({
	render(){
		return(
			<div className="request-item">
				<p>{this.props.name}</p>
				<p>{this.props.email}</p>
				<p className="text">{this.props.text}</p>
			</div>
		)
	}
});