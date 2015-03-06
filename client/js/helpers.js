/*
 * Basic helpers
 */
trimInput = function(val) {
    // For whitespace
    return val.replace(/^\s*|\s*$/g, "");
}

isValidPassword = function(val) {
    return val.length >= 6 ? true : false; 
}

getDateFromTimestamp = function(timestamp) {
    var date = new Date(timestamp);
    var month = getMonthName(date.getMonth());

    return month + (date.getDay() + 1) + ", " + date.getFullYear();
}

function getMonthName(date) {
    var month = "FAILED MONTH PARSING";
    
    switch(date) {
        case 0:
            month = "January ";
            break;
        case 1:
            month = "February ";
            break;
        case 2:
            month = "March ";
            break;
        case 3:
            month = "April ";
            break;
        case 4:
            month = "May ";
            break;
        case 5:
            month = "June ";
            break;
        case 6:
            month = "July ";
            break;
        case 7:
            month = "August ";
            break;
        case 8:
            month = "September ";
            break;
        case 9:
            month = "October ";
            break;
        case 10:
            month = "November ";
            break;
        case 11:
            month = "December ";
            break;
    }
    
    return month;
}

/*
 * UI Animation
 */
inked = function(pageX, pageY, parent, color) {
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

transition = function(arr) {
    var timeout = 200;
    var incr = 1;
    _.each(arr, function(cl) {
        var el_list = $('.' + cl);
        _.each(el_list, function(el) {
            setTimeout(function() {
                $(el).removeClass(cl);
            }, timeout);
            if(timeout < 1000)
                timeout += timeout;
        });
        timeout = 200;
        incr = 1;
    });
}

scrollToTop = function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
}

mobileCheck = function() {
  var check = false;
  (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

/*
 * Document switching logic
 */
setupClicks = function() {
    var links = $('a');
    links.each(function(idx) {
        hrefCheck(links[idx]);
    });
}

hrefCheck = function(el) {
    if(el.href.indexOf('#') != -1)
        return;

    $(el).on('click', function(e) {
        e.preventDefault();
        history.pushState(null, null, this.href);
        grabContent(this.href);
    });
}

grabContent = function(href) {
    // Grab the post
    $.ajax(href).done(function(d) {
                swapContent(d);
            });
    return false;
}

swapContent = function(data) {
    $('.primary-content').html(data);
    //setupClicks();
}

updatePostList = function() {
    $.ajax(window.location.origin+'/post-list').done(function(d) {
                swapContent(d);
            });
    return false;
}

/* Admin Helpers */
validatePost = function(post) {
    
    // TODO: Change this to return a list of errors so I can display that list
    if(!post.title)
        return false;
    
    if(!post.author)
        return false;
    
    if(post.content.length < 400)
        return false;
    
    if(post.short.length > 140)
        return false;
    
    if(post.url === null)
        return false;
    
    if(post.category === "pick one")
        return false;
    
    if(post.image_url === '')
        return false;
    
    if(post.tags.length < 2)
        return false;
    
    return true;
}

validateProduct = function(product) {
    // TODO: Change this to return a list of errors so I can display that list
    if(!product.name)
        return false;
    
    if(!product.endorser)
        return false;
    
    if(product.expiration_date <=  Date.now())
        return false;
    
    if(product.short.length > 140)
        return false;
    
    if(product.url === null)
        return false;
    
    if(product.category === "pick one")
        return false;
    
    if(product.image_url === '')
        return false;
    
    if(product.tags.length <= 1)
        return false;
    
    if(!product.price || product.price <= 0.00)
        return false;
    
    return true;
}