Template.addthisSharebox.rendered = function() {
    setTimeout(function() {
        //check for addthis buttons
        if(addthis && addthis.layers && $('.addthis_sharing_toolbox').children().length === 0) {
            addthis.layers.refresh();
        }
    }, 1000);
}