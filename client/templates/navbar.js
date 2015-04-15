Template.navbar.rendered = function() {
    $('nav a').click(function() {
        scrollToTop();
        $('a.active').removeClass('active');
        $(this).addClass('active');
    });
}