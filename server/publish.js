Meteor.publish('posts', function() {
    var posts = Posts.find({});
    
    if (posts)
        return posts;
    else
        this.ready();
});

//Meteor.publish('fullPost', function(category, post_url) {
//    return Posts.find({category: category, url: post_url});
//});

Meteor.publish('products', function() {
    var products = Products.find({});
    
    if (products)
        return products;
    else
        this.ready();
});

Meteor.publish('userData', function() {
    if(this.userId)
        return Meteor.users.find({}, { fields: { username: 1, profile: 1, emails: 1 } });
    else
        this.ready();
});