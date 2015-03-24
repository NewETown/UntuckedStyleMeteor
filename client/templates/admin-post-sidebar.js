Template.adminPostSidebar.rendered = function() {
}

Template.adminPostSidebar.events({
    'click .load-post': function() {
        var post = this;
        window._POST = post;
        $('#post-category').val(post.category.toUpperCase());
        $('#post-title').val(post.title);
        $('#post-background-picture').focusin().val(post.image_url).focusout();
        $('#post-short').val(post.short);
        $('#post-content').val(post.content);
        var tag_containers = $('.tag');
        tag_containers.each(function(i) {$(this).val(post.tags[i]);});
        
        $('#delete').prop('disabled',false);
    }
});

Template.adminPostSidebar.helpers({
    posts: function() {
        return Posts.find({}, {sort: {timestamp: -1}});
    }
});