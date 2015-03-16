Template.sidebar.rendered = function() {
    var lockedSidebar = $(".side-content");
    var lockedSidebarOffset = lockedSidebar.position().left;
    lockedSidebar.css('max-width', lockedSidebar.outerWidth() + 'px');
    
    $(window).scroll(function() {
        if($(window).scrollTop() > 48) {
            lockedSidebar.addClass("locked-side-content");
            lockedSidebar.css('left', lockedSidebarOffset);
        } else {
            lockedSidebar.removeClass("locked-side-content");
            lockedSidebar.css('left', 0);
        }
    });
}

Template.sidebar.events({
    'click a': function() {
        scrollToTop();
    }
});