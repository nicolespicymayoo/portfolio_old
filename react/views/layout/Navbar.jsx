import React from 'react';
import {Link} from 'react-router';
import './Navbar.css';

export const Navbar = React.createClass({
	render(){
		return(
			<div className="navbar">
				<div className="logo">
					<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
						 width="30px" height="32px" viewBox="0 0 512 512">
					<path d="M383.1,257.4c0.6-5.4,0.9-10,0.9-13.8c0-19.6-3.3-19.7-16-19.7h-75.5c7.3-12,11.5-24.4,11.5-37c0-37.9-57.3-56.4-57.3-88
						c0-11.7,5.1-21.3,9.3-34.9c-26.5,7-47.4,33.5-47.4,61.6c0,48.3,56.3,48.7,56.3,84.8c0,4.5-1.4,8.5-2.1,13.5h-55.9
						c0.8-3,1.3-6.2,1.3-9.3c0-22.8-39.1-33.9-39.1-52.8c0-7,1-12.8,3.2-21c-12.9,5.1-28.3,20-28.3,36.8c0,26.7,31.9,29.3,36.8,46.3H80
						c-12.7,0-16,0.1-16,19.7c0,19.6,7.7,61.3,28.3,111c20.6,49.7,44.4,71.6,61.2,86.2l0.1-0.2c5.1,4.6,11.8,7.3,19.2,7.3h102.4
						c7.4,0,14.1-2.7,19.2-7.3l0.1,0.2c9-7.8,20-17.8,31.4-32.9c4.7,2,9.8,3.7,15.4,5c8.4,2,16.8,3,24.8,3c24,0,45.6-9.2,60.8-25.8
						c13.4-14.6,21.1-34.4,21.1-54.2C448,297,420,264.5,383.1,257.4z M366.1,384.2c-8.6,0-15.6-1.2-22.1-4.2c4-8,7.9-15.9,11.7-25.1
						c10.1-24.4,17.1-47,21.6-65.8c22,4.3,38.7,23.8,38.7,47.1C416,358.9,398.8,384.2,366.1,384.2z"/>
					</svg>

				</div>
				<div className="navbar-tabs-container">
					<Link
						to="/"
						className="navbar-tab"
						activeClassName="active"
					>
						home
					</Link>

					<Link
						to="/our-services"
						className="navbar-tab"
						activeClassName="active"
					>
						services

					</Link>

					<Link
						to="/our-portfolio"
						className="navbar-tab"
						activeClassName="active"
					>
						portfolio
					</Link>
					
					<Link
						to="/contact-us"
						className="navbar-tab"
						activeClassName="active"
					>
						contact
					</Link>
				</div>
			</div>
		)
	}
});
