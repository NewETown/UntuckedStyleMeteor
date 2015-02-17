Template.relatedArticles.rendered = function() {
}

Template.relatedArticles.helpers({
    articles: function() {

        var query = {};
        
        if(Router.current().data().tags.length > 0) {
            // search
            query["tags"] = {$in: Router.current().data().tags};
        }
        
        var posts = Posts.find(query, {limit: 5});
        
        if(posts.count() < 5)
            posts = Posts.find({_id: {$ne: Router.current().data()._id}}, {limit: 5});
        
        return posts;
    }
});

Template.relatedArticles.events({
    'click .post-short': function(e) {
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