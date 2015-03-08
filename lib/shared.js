Meteor.methods({
    postUpsert: function(id, doc) {
        Posts.upsert(id, doc);
    },
    postDelete: function(id) {
        Posts.remove(id);
    },
    productUpsert: function(id, doc) {
        Products.upsert(id, doc);
    },
    productDelete: function(id) {
        console.log('Deleting: ' + id);
        Products.remove(id);
    }
});