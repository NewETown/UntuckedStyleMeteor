Template.logout.rendered = function() {
    $('.logout-button').click(function() {
        console.log('Logged out');
        Meteor.logout();
        Router.go('home');
    });
}