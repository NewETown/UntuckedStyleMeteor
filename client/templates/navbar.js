Template.navbar.rendered = function() {
//    This works for locking the bar to the top but shifting the bar looks better
//    var lockHeight = $('.navbar').height() - $('.untucked-header-list').height();
//    var lockedBar = $(".untucked-header-list");
//    
//    $(window).scroll(function() {
//        if($(window).scrollTop() > lockHeight) {
//            lockedBar.addClass("locked shadow-2");
//        } else {
//            lockedBar.removeClass("locked shadow-2");
//        }
//    });
    
    var navbar = $('.locked-lower-nav');
    var navHeight = navbar.height();
    var slideHeight = $('.navbar .locked').height() + navHeight;
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
    
    $(".ink-teal-gray").click(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        var parent = $(this).parent();

        inked(x, y, parent, 'teal-gray');
    });

    $(".ink-light-gray").click(function(e) {
        var x = e.pageX;
        var y = e.pageY;
        var parent = $(this).parent();

        inked(x, y, parent, 'light-gray');
    });
    
    $('nav a').click(function() {
        scrollToTop();
    });
}