$(document).ready(function() {
    var lockedBar = $(".untucked-header-list");
    var leftCard = $('#left-card');
    var rightCard = $('#right-card');
    var width = $('#left-card').width();

    $(window).scroll(function() {
        if($(window).scrollTop() > 177) {
            lockedBar.addClass("locked shadow-2");
            leftCard.addClass("locked-left-card");
            leftCard.css('width', width);
            rightCard.addClass("locked-right-card");
            rightCard.css('width', width);
        } else {
            lockedBar.removeClass("locked shadow-2");
            leftCard.removeClass("locked-left-card");
            rightCard.removeClass("locked-right-card");
        }
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

    $('a').click(function(e) {
        e.preventDefault();

        var el = $(e.target);

        var re = new RegExp('\\d*\\.\\d*', 'g');

        var ms = re.exec($(e.target).parent().find('.animate').css('animation-duration'));
        ms = ms[0] * 1000;
        console.log(ms);

        setTimeout(function(){
            // window.location = "http://google.com";
            console.log("Sound off");
        }, ms);
    });
});

var inked = function(pageX, pageY, parent, color) {
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