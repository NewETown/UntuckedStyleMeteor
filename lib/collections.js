Posts = new Meteor.Collection('posts');
Posts.allow({
    insert: function() {
        return Meteor.user().profile.can_post === true;
    },
    update: function(userId, doc, fields, modifier) {
        // You can only change your own posts unless you're admin
        // return (Meteor.user().profile.can_post === true && Meteor.user()._id === doc.owner_id) || Meteor.user().profile.admin;
        return Meteor.user().profile.can_post === true;
    },
    remove: function(userId, doc) {
        // Only admin can remove posts
        return Meteor.user().profile.admin === true;
    }
});
Posts.deny({
    update: function(userId, docs, fields, modifier) {
        // Nobody changes doc ownership
        return _.contains(fields, 'userId');
    }
});

Products = new Meteor.Collection('products');
Products.allow({
    insert: function() {
        return Meteor.user().profile.can_manage_products === true;
    },
    update: function(userId, doc, fields, modifier) {
        // You can only change your own posts unless you're admin
        return Meteor.user().profile.can_manage_products === true;
    },
    remove: function(userId, doc) {
        // Only admin can remove posts
        return Meteor.user().profile.can_manage_products === true;
    }
});
Products.deny({
    update: function(userId, docs, fields, modifier) {
        // Nobody changes doc ownership
        return _.contains(fields, 'userId');
    }
});
