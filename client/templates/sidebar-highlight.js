Template.sidebarHighlight.rendered = function() {
    var imageURL = "";
    
    transition(["sidebar-transition"]);
    
    $.ajax({
        url: "http://api.instagram.com/oembed?url=http://instagr.am/p/ztjhE8o4jl/",
        dataType: "jsonp",
        success: function(data) {
            $('#igBox').append(data.html);
            //$('#igBox .image').html(data.thumbnail_url)
        }
    });
}