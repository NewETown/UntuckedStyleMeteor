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
    }
});

Template.relatedArticles.events({
    'click .card-short': function(e) {
        scrollToTop();
        setTimeout(function() {
            $('#fbComments').html(getHtml(e.target.href));
            FB.XFBML.parse(document.getElementById('fbComments'));
        }, 0);
    }
});

function getHtml(href) {
    return '<div class="fb-comments" data-href="'+href+'" data-numposts="5" data-colorscheme="light" data-width="100%" data-order-by="social"></div>';
}