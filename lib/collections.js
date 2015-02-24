Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function() {
        return Meteor.user().profile.is_admin === true;
    },
    update: function(userId, doc, fields, modifier) {
        // You can only change your own posts unless you're admin
        return Meteor.user().profile.is_admin === true;
    },
    remove: function(userId, doc) {
        // Only admin can remove posts
        return Meteor.user().profile.is_admin === true;
    }
});

Posts.deny({
    update: function(userId, docs, fields, modifier) {
        // Nobody changes doc ownership
        return _.contains(fields, 'userId');
    }
});