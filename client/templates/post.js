Template.post.rendered = function() {
    scrollToTop();
    transition(["card-post-transition"]);
    setTimeout(function() {FB.XFBML.parse();}, 0);
}

Template.post.helpers({
    formatDate: function() {
        return getDateFromTimestamp(this.post_date);
    },
    currentUrl: function() {
        return Router.current().url;
    },
    commentsConfig: function() {
        var url = getCurrentUrl();
        return {href: url, width: '100%'};
    },
    likesConfig: function() {
        return { 
            href: "http://www.untuckedstyle.com",
            layout: "button",
            action: "like",
            share: "true",
            show_faces: "false"
        };
    }
});

function getCurrentUrl() {
    var _t = Router.current().url;
    
    if(_t.indexOf(window.location.href) >= 0)
       return _t;
    else
       return window.location.href + Router.current().url;
}