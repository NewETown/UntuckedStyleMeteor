Template.postList.rendered = function() {
    setupClicks();
}

Template.postList.helpers({
    posts: function() {
        return this;
    }
});