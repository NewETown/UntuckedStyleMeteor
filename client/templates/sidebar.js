Template.sidebar.rendered = function() {
    var lockHeight = $('.navbar').height() - $('.untucked-header-list').height();
    var lockedSidebar = $(".side-content");
    var lockedSidebarOffset = lockedSidebar.position().left;
    lockedSidebar.css('max-width', lockedSidebar.outerWidth() + 'px');
    
    $(window).scroll(function() {
        if($(window).scrollTop() > lockHeight) {
            lockedSidebar.addClass("locked-side-content");
            lockedSidebar.css('left', lockedSidebarOffset);
        } else {
            lockedSidebar.removeClass("locked-side-content");
            lockedSidebar.css('left', 0);
        }
    });
}