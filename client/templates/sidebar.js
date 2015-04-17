Template.sidebar.rendered = function() {
    
    $(window).resize(positionSidebar);
    
    positionSidebar();
}

Template.sidebar.events({
});

function positionSidebar() {
    var sidebar = $(".side-content");
    var lockedContent = sidebar.children();
    var lockedSidebarOffset = $(".side-content").position().left;
    lockedContent.css('width', sidebar.outerWidth() + 'px');
    lockedContent.addClass("locked-side-content");
    lockedContent.css('left', lockedSidebarOffset);
}