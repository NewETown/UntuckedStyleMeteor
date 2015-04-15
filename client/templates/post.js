Template.post.rendered = function() {
    scrollToTop();
    transition(["card-post-transition"]);
    setTimeout(function() {FB.XFBML.parse();}, 0);
//    This is how we get comment count per post
//    $.ajax('https://graph.facebook.com/v2.3/?fields=share%7Bcomment_count%7D&id=' + getCurrentUrl())
//    .success(function(e) {
//        if(!e.share || e.share.comment_count === 0) {
//            var shrink = function() {
//                if($('.fb-comments span').length > 0) {
//                    $('.fb-comments span').css('height', '80px');
//                } else {
//                    setTimeout(shrink, 1000);
//                }
//            }
//            setTimeout(shrink, 1500);
//        }
//    });
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
    },
    getPathName: function() {
        return this.category + 'List';
    },
    getCapitalizedCategory: function() {
        var cat = this.category;
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
});

function getCurrentUrl() {
    var _t = Router.current().url;
    
    if(_t.indexOf(window.location.href) >= 0)
       return _t;
    else
       return window.location.href + Router.current().url;
}