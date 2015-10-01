Meteor.publish('allRequests', function(){
	return Requests.find();
});


