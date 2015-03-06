Meteor.methods({
    postUpsert: function(id, doc) {
        Posts.upsert(id, doc);
    },
    productUpsert: function(id, doc) {
        Products.upsert(id, doc);
    }
});