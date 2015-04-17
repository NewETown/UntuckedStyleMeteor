Template.navbar.rendered = function() {
    $('nav a').click(function() {
        scrollToTop();
        $('.untucked-header-list li a.active').removeClass('active');
        $(this).addClass('active');
    });
}