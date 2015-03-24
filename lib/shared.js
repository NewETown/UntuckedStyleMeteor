Meteor.methods({
    postUpsert: function(id, doc) {
        var prevPost = Posts.findOne({_id: id});
        console.log(prevPost);
        Posts.upsert(prevPost, doc);
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