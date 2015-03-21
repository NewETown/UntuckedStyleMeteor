Template.postList.rendered = function() {
}

Template.postList.helpers({
    isHome: function() {
        return Router.current().route.getName() === "home";
    }
});