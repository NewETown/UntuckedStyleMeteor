Template.sidebarHighlight.rendered = function() {
    var imageURL = "";
    
    $.ajax({
        url: "http://api.instagram.com/oembed?url=http://instagr.am/p/y2sbabo4qS/",
        dataType: "jsonp",
        success: function(data) {
            console.log(data);
            $('#igBox').append(data.html);
            //$('#igBox .image').html(data.thumbnail_url)
        }
    });
}