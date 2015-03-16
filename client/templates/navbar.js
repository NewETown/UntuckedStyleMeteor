Template.navbar.rendered = function() {
    var navbar = $('.locked-lower-nav');
    var navHeight = navbar.height();
    var slideHeight = $('.navbar .upper-nav').height() + navHeight;
    var prevHeight = $(window).scrollTop();
    var pos = prevHeight;
    var scrollDown = pos >= prevHeight; // True is down and false is up
    
    $(window).scroll(function() {
        pos = $(window).scrollTop();
        scrollDown = pos > prevHeight;
        if(scrollDown && pos > slideHeight) {
            navbar.addClass('slide');
        } else {
            navbar.removeClass('slide');
        }
        prevHeight = pos;
    });
    
    if(!mobileCheck()) {
        $(".ink-teal-gray").click(function(e) {
            var x = e.pageX;
            var y = e.pageY;
            var parent = $(this).parent();

            inked(x, y, parent, 'teal-gray');
        });
    }
    
    $('nav a').click(function() {
        scrollToTop();
    });
}