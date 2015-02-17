Posts = new Meteor.Collection('posts');

Posts.allow({
    insert: function(userId, doc) {
        return userId;
    },
    update: function(userId, doc, fields, modifier) {
        // You can only change your own posts unless you're admin
        return doc.userId === userId;
    },
    remove: function(userId, doc) {
        // Only admin can remove posts
        return doc.userId === userId;
    }
});

Posts.deny({
    update: function(userId, docs, fields, modifier) {
        // Nobody changes doc ownership
        return _.contains(fields, 'userId');
    }
});