Template.addProduct.rendered = function() {
    var FETCHING_PICTURE = false;
    window._POST_ID = null;
    
    $('#product-image').focusout(function(e) {
        var url = e.target.value;
        $('.img-error').css('display', 'none');
        $('.url-error').css('display', 'none');
        
        // For now basic validation will be fine
        if(url.indexOf('://') < 1) {
            $('.img-preview').attr('src', '');
            $('.url-error').css('display', 'block');
            return;
        }
        
        if(url.indexOf('.jpg') < 1) {
            setImage(url);
        } else if(url.indexOf('.jpeg') < 1) {
            setImage(url);
        }else if(url.indexOf('.png') < 1) {
            setImage(url);
        } else if(url.indexOf('.gif') < 1) {
            setImage(url);
        } else {
            $('.img-preview').attr('src', '');
            $('.url-error').css('display', 'block');
        }
    });
}

Template.addProduct.events({
    'click #submit': function() {
        var newProduct = {};
        
        var _date = '';
        
        if(checkDate($('#expiration-date').val()))
           _date = Date.parse($('#expiration-date').val()) + (24*60*60*1000); // Add one day
        
        newProduct["name"] = $('#product-name').val();
        newProduct["expiration_date"] = _date;
        newProduct["tags"] = getTags();
        newProduct["endorser"] = Meteor.user().profile.name;
        newProduct["image_url"] = $('.img-preview').attr('src');
        newProduct["url"] = $('#product-url').val();
        newProduct["short"] = $('#product-short').val();
        newProduct["spotlight"] = false; // Not in use
        newProduct["price"] = $('#product-price').val();
        
        if(validateProduct(newProduct)) {
            Meteor.call('productUpsert', window._PRODUCT_ID, newProduct);
            resetEverything();
        } else {
            console.log("ERROR: Invalid product");
        }
    }
});

Template.addProduct.helpers({
    getFriendlyDate: function() {
        var _d = new Date(this.expiration_date);
        return _d.toLocaleDateString();
    }
});

function setImage(url) {
    $('.img-preview').attr('src', url);
}

function getTags() {
    var tags = [];
    $('.tag').each(function() {
        if(this.value != '')
            tags.push(this.value.toLowerCase()); 
    });
    return tags;
}

function toUrl(url) {
    return encodeURIComponent(url.toLowerCase());
}

function resetEverything() {
    $('textarea').each(function() { this.value = ''; });
    $('.img-preview').attr('src','');
    window._PRODUCT_ID = null;
}

function checkDate(date) {
    var segmented = date.split('/');
    
    if(segmented.length != 3)
        return false;
    else if(segmented[0].length != 2 && segmented[1].length != 2 && segmented[2].length != 4)
        return false;
    
    return true;
}