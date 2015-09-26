const {Router, Route} = ReactRouter;

Meteor.startup(function(){
	const targetElement = document.createElement("div");
	targetElement.id = "react-app";
	document.body.appendChild(targetElement);

	const routes = (
		<Router history={CreateBrowserHistory()}>
			<Route component={Layout}>
				<Route path="/" component={Homepage} />
				<Route path="/our-portfolio" component={Portfolio} />
				<Route path="/about-us" component={About}/>
				<Route path="/contact-us" component={Contact}/>
			</Route>
		</Router>
	)

	React.render(routes, document.getElementById("react-app"));
});