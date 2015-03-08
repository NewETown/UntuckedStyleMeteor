Template.relatedArticles.rendered = function() {
}

Template.relatedArticles.helpers({
    articles: function() {

        var query = {};
        query["_id"] = {$ne: Router.current().data()._id};
        query["$or"] = [ { category: Router.current().data().category }, { tags: { $in: Router.current().data().tags } } ];
        
        var posts = Posts.find(query, {sort: {post_date: -1}, limit: 4});
        
        if(posts.count() == 0)
            posts = Posts.find({_id: {$ne: Router.current().data()._id}}, {sort: {post_date: -1}, limit: 4});
        
        return posts;
    },
    getDate: function() {
        return getDateFromTimestamp(this.post_date);
    }
});

Template.relatedArticles.events({
    'click .card-short': function(e) {
        scrollToTop();
        try {
            FB.XFBML.parse();
        } catch(e) {
            console.log('Error: ');
            console.log(e);
        }
    }
});