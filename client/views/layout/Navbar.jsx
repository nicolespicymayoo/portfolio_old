const {Link} = ReactRouter;

Navbar = React.createClass({
	render(){
		return(
			<div className="navbar">
				<Link 
					to="/" 
					className="navbar-tab" 
					activeClassName="active"	
				>home</Link>

				<Link className="navbar-tab">portfolio</Link>
				<Link className="navbar-tab">about</Link>
				<Link className="navbar-tab">contact</Link>
			</div>
		)
	}
});