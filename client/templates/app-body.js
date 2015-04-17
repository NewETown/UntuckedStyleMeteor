Template.appBody.rendered = function() {
}

Template.appBody.helpers({
    isAdmin: function() {
        if(Meteor.user() && Meteor.user().profile.is_admin)
            return true;
        
        return false;
    }
});