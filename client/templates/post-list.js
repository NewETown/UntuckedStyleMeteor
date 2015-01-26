Template.postList.rendered = function() {
    setupClicks();
}

Template.postList.helpers({
    posts: function() {
        return this;
    }
});

function setupClicks() {
    var links = $('a');

    links.each(function(idx) {
        hrefCheck(links[idx]);
    });
}

function hrefCheck(el) {

    if(el.href.indexOf('#') != -1)
        return;
    
    $(el).on('click', function(e) {
        e.preventDefault();
        console.log(e.target);
        history.pushState(null, null, e.target.href);
        grabPost(e.target.href);
    });
}

function grabPost(href) {
    var BASE_URL = window.location.origin;
    var req = new XMLHttpRequest();
    
    req.open("GET",
            href.split("/").pop(),
             false);
    req.send(null);
    
    if(req.status == 200) {
        console.log(req.responseText);
        return true;
    }
    
    return false;
}