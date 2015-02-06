Template.appBody.rendered = function() {
    var lockHeight = $('.navbar').height() - $('.untucked-header-list').height();
    var lockedBar = $(".untucked-header-list");
    var lockedSidebar = $(".side-content");
    var lockedSidebarOffset = lockedSidebar.position().left;
    
    $(window).scroll(function() {
        if($(window).scrollTop() > lockHeight) {
            lockedBar.addClass("locked shadow-2");
            lockedSidebar.addClass("locked-side-content");
            lockedSidebar.css('left', lockedSidebarOffset);
        } else {
            lockedBar.removeClass("locked shadow-2");
            lockedSidebar.removeClass("locked-side-content");
            lockedSidebar.css('left', 0);
        }
    });
    
    window.addEventListener('hashchange', function(e) {
        console.log('Hash change');
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

//    window.addEventListener("popstate", function(e) {
//        if(location.pathname === '/')
//            grabContent(window.location + 'post-list');
//        else
//            grabContent(location.pathname);
//    });

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

    $('a').click(function(e) {
//        Old code to detect click events
//        e.preventDefault();
//
//        var el = $(e.target);
//
//        var re = new RegExp('\\d*\\.\\d*', 'g');
//
//        var ms = re.exec($(e.target).parent().find('.animate').css('animation-duration'));
//        ms = ms[0] * 1000;
//        console.log(ms);
//
//        setTimeout(function(){
//            console.log("Sound off");
//        }, ms);
        
//        hrefCheck($(e.currentTarget));
    });
}