Template.adminUsersSidebar.rendered = function() {
}

Template.adminUsersSidebar.events({
    'click .load-user': function() {
        console.log(this);
    }
});

Template.adminUsersSidebar.helpers({
    users: function() {
        return Meteor.users.find({});
    }
});