Template.appBody.rendered = function() {
    
    if(window._igKey == null) {
        console.log('No Instagram key');
        // go get one
    }

    $('a').click(function(e) {
//        Old code to detect click events
//        e.preventDefault();
//
//        var el = $(e.target);
//
//        var re = new RegExp('\\d*\\.\\d*', 'g');
//
//        var ms = re.exec($(e.target).parent().find('.animate').css('animation-duration'));
//        ms = ms[0] * 1000;
//        console.log(ms);
//
//        setTimeout(function(){
//            console.log("Sound off");
//        }, ms);
        
//        hrefCheck($(e.currentTarget));
    });
}