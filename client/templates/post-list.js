Template.postList.rendered = function() {
    scrollToTop();
    transition(["card-post-short-transition", "sidebar-transition"]);
}

Template.postList.helpers({
    getProductLink: function() {
        window._post_count += 1;
        console.log(window._post_count);
        return window._post_count <= 1;
    }   
});