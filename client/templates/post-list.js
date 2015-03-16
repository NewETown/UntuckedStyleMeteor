Template.postList.rendered = function() {
}

Template.postList.helpers({
    getProductLink: function() {
        window._post_count += 1;
        return window._post_count <= 1;
    },
    isHome: function() {
        return Router.current().route.getName() === "home";
    }
});