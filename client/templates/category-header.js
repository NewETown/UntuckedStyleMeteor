Template.categoryHeader.rendered = function() {
    getCategoryHTML();
    
    $('a').click(function() {
        $('#category-header').removeClass('fade-in');
        $('#category-header').addClass('fade-out');
        setTimeout(function() {
            $('#category-header').removeClass('fade-out');
            $('#category-header').addClass('fade-in');
            getCategoryHTML();
        }, 300);
    });
};

function getCategoryHTML() {
    $('.email-cta').html(TEXT_OBJECTS[Router.current().route.getName().toLowerCase()]);
}

var TEXT_OBJECTS = {
    "home": "<p><i>Untucked Style</i> is the ultimate lifestyle resource for modern men. From product recommendations to articles on the subjects you care about, we exist to help you be the person you want to be.</p>",
    "style": "<p>Present yourself the way you want to be seen. We want to help you develop your own style that reflects the type of person you are or are aspiring to be.</p>",
    "ambition": "<p>The world has become a crowded place. To make it today you need to constantly be one step ahead of your competition; we want to arm you with the latest knowledge and tools to help you succeed.</p>",
    "drinks": "<p>Alcohol is so much more than social lubrication. Step up your drink game with our helpful articles and tips on new ways to treat yourself and your friends.</p>",
    "life": "<p>A holistic perspective on life. Stay up to date on the latest health info, master your body language, and form habits for success in all of your endeavors.</p>"
};