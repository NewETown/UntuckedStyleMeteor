Meteor.publish('posts', function() {
    return Posts.find({});
});

//Meteor.publish('fullPost', function(category, post_url) {
//    return Posts.find({category: category, url: post_url});
//});

Meteor.publish('products', function() {
    return Products.find({});
});

Meteor.publish('userData', function() {
    if(this.userId)
        return Meteor.users.find({}, { fields: { username: 1, profile: 1, emails: 1 } });
    else
        this.ready();
});