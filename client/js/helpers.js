/*
 * Basic helpers
 */
trimInput = function(val) {
    // For whitespace
    return val.replace(/^\s*|\s*$/g, "");
}

isValidPassword = function(val) {
    return val.length >= 6 ? true : false; 
}

/*
 * UI Animation
 */
inked = function(pageX, pageY, parent, color) {
    var ink, d, x, y;

    //create .ink element if it doesn't exist
    if(parent.find(".ink").length == 0)
        parent.prepend("<span class='ink " + color + "'></span>");

    ink = parent.find(".ink");
    //incase of quick double clicks stop the previous animation
    ink.removeClass("animate");

    //set size of .ink
    if(!ink.height() && !ink.width())
    {
        //use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
        d = Math.max(parent.outerWidth(), parent.outerHeight());
        ink.css({height: d, width: d});
    }

    //get click coordinates
    //logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
    x = pageX - parent.offset().left - ink.width()/2;
    y = pageY - parent.offset().top - ink.height()/2;

    //set the position and add class .animate
    ink.css({top: y+'px', left: x+'px'}).addClass("animate");
}

transition = function(arr) {
    var timeout = 200;
    var incr = 1;
    _.each(arr, function(cl) {
        var el_list = $('.' + cl);
        _.each(el_list, function(el) {
            setTimeout(function() {
                $(el).removeClass(cl);
            }, timeout);
            timeout += timeout;
        });
        timeout = 200;
        incr = 1;
    });
}

scrollToTop = function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

/*
 * Document switching logic
 */
setupClicks = function() {
    var links = $('a');
    links.each(function(idx) {
        hrefCheck(links[idx]);
    });
}

hrefCheck = function(el) {
    if(el.href.indexOf('#') != -1)
        return;

    $(el).on('click', function(e) {
        e.preventDefault();
        history.pushState(null, null, this.href);
        grabContent(this.href);
    });
}

grabContent = function(href) {
    // Grab the post
    $.ajax(href).done(function(d) {
                swapContent(d);
            });
    return false;
}

swapContent = function(data) {
    $('.primary-content').html(data);
    //setupClicks();
}

updatePostList = function() {
    $.ajax(window.location.origin+'/post-list').done(function(d) {
                swapContent(d);
            });
    return false;
}