if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function() {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function() {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });



  Template.dropdowns.helpers({

    languages: function() {
      return ['da', 'en', 'es'];
    }
  });

  Template.dropdowns.rendered = function() {
    $('#lang-dropdown').dropdown();

  };



}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
};
