Meteor.methods({
    postUpsert: function(id, doc) {
        Posts.upsert(id, doc);
    }
});