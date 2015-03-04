Template.postList.rendered = function() {
    scrollToTop();
}

Template.postList.helpers({
    getProductLink: function() {
        window._post_count += 1;
        return window._post_count <= 1;
    } 
});