Meteor.publish('posts', function() {
    return Posts.find({});
});

Meteor.publish('products', function() {
    return Products.find({expiration_date: {$gt: Date.now()}});
});