Template.facebookComments.rendered = function() {
    setTimeout(function() {
        FB.XFBML.parse(document.getElementById('fbComments'));
    }, 100);
};

Template.facebookComments.helpers({
    currentUrl: function() {
        return Router.current().url;
    }
});