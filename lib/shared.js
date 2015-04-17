Meteor.methods({
    postUpsert: function(id, doc) {
        var prevPost = Posts.findOne({_id: id});
        Posts.upsert(prevPost, doc);
    },
    postDelete: function(id) {
        Posts.remove(id);
    },
    productUpsert: function(id, doc) {
        var prevProduct = Products.findOne({_id: id});
        Products.upsert(prevProduct, doc);
    },
    productDelete: function(id) {
        console.log('Deleting: ' + id);
        Products.remove(id);
    }
});