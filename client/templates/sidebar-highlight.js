Template.sidebarHighlight.rendered = function() {
    var imageURL = "";
    
    transition(["sidebar-transition"]);
    
    $.ajax({
        url: "http://api.instagram.com/oembed?url=http://instagr.am/p/0_3KjPI4o5/",
        dataType: "jsonp",
        success: function(data) {
            $('#igBox').append(data.html);
        }
    });
}