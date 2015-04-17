Template.postList.rendered = function() {
    scrollToTop();
}

Template.postList.helpers({
    isHome: function() {
        return Router.current().route.getName() === "home";
    }
});