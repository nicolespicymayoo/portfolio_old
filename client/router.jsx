const {Router, Route} = ReactRouter;

Meteor.startup(function(){
	const targetElement = document.createElement("div");
	targetElement.id = "react-app";
	document.body.appendChild(targetElement);

	const routes = (
		<Router history={CreateBrowserHistory()}>
			<Route component={Layout}>
				<Route path="/" component={Homepage} />
			</Route>
		</Router>
	)

	React.render(routes, document.getElementById("react-app"));
});