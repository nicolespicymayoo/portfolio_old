Requests = new Mongo.Collection('requests');

Meteor.methods({
  submitContactInfo: function(name, email, text){
    Requests.insert({
      name: name,
      email: email,
      text: text,
      date: new Date()
    });
  }
});