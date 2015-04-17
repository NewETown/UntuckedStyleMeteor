Template.adminManageProducts.rendered = function() {
    var FETCHING_PICTURE = false;
    window._PRODUCT = null;
    
    $('#delete').prop('disabled',true);
    
    $('#product-category').on('change', function() {
        $(this).removeClass('.invalid-field');
        $('.category.error').css('display', 'none');
    });
    
    $('#product-image').focusout(function(e) {
        var url = e.target.value;
        $('.img-preview').css('display', 'none');
        $('.img.error').css('display', 'none');
        
        // For now basic validation will be fine
        if(url.indexOf('://') < 1) {
            $('.img-preview').attr('src', '');
            $('.img.error').css('display', 'block');
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
            $('.img-preview').attr('src', '').css('display','none');
            $('.img.error').css('display', 'block');
        }
    });
}

Template.adminManageProducts.events({
    'click #submit': function() {
        var newProduct = {};
        
        var _date = '';
        
        if(checkDate($('#expiration-date').val())) {
            _date = Date.parse($('#expiration-date').val());
        }
        
        newProduct["name"] = $('#product-name').val();
        newProduct["expiration_date"] = _date;
        newProduct["tags"] = getTags();
        newProduct["image_url"] = $('.img-preview').attr('src');
        newProduct["url"] = $('#product-url').val();
        newProduct["short"] = $('#product-short').val();
        newProduct["spotlight"] = false; // Not in use
        newProduct["price"] = $('#product-price').val();
        newProduct["category"] = $('#product-category').val().toLowerCase();
        
        if(window._PRODUCT) {
            newProduct["endorser"] = window._PRODUCT.endorser;
        } else {
            newProduct["endorser"] = Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname;
            newProduct["creation_date"] = Date.now();
        }
        
        $('.invalid-field').removeClass('invalid-field');
        
        if(validateProduct(newProduct)) {
            var id = null;
            if(window._PRODUCT != null)
                id = window._PRODUCT._id;
            
            Meteor.call('productUpsert', id, newProduct);
            resetEverything();
        }
    },
    'click #delete': function() {
        if(window._PRODUCT._id != undefined && confirm('Are you sure?')) {
            Meteor.call('productDelete', window._PRODUCT._id);
            resetEverything();
        } else {
            console.log('Did not delete');
        }
    }
});

Template.adminManageProducts.helpers({
    getFriendlyDate: function() {
        var _d = new Date(this.expiration_date);
        return _d.toLocaleDateString();
    },
    getCategories: function() {
        var categories = ["STYLE", "AMBITION", "DRINKS", "LIFE"];
        return categories;
    }
});

function setImage(url) {
    $('.img-preview').attr('src', url).css('display','block');
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
    $('.img-preview').attr('src','').css('display','none');
    window._PRODUCT = null;
    $('#delete').prop('disabled',true);
    $('.error').each(function() { $(this).css('display', 'none'); });
}

function checkDate(date) {
    var segmented = date.split('/');
    
    if(segmented.length != 3)
        return false;
    else if(segmented[0].length != 2 && segmented[1].length != 2 && segmented[2].length != 4)
        return false;
    
    return true;
}

function validateProduct(product) {
    var isValid = true;
    
    if(!product.name) {
        isValid = false;
        $('#product-name').addClass('invalid-field');
        $('.name.error').css('display', 'inherit');
    }
    
    if(product.category === "pick one") {
        isValid = false;
        $('#product-category').addClass('invalid-field');
        $('.category.error').css('display', 'inherit');
    }
    
    if(!product.endorser) {
        isValid = false;
        console.log('ERROR: Need product endorser');
    }
    
    if(product.expiration_date <=  Date.now()) {
        isValid = false;
        $('#expiration-date').addClass('invalid-field');
        $('.expiration.error').css('display', 'inherit');
    }
    
    if(product.short.length > 140 || product.short.length === 0) {
        isValid = false;
        $('#product-short').addClass('invalid-field');
        $('.short.error').css('display', 'inherit');
    }
    
    if(product.url === '') {
        isValid = false;
        $('#product-url').addClass('invalid-field');
        $('.url.error').css('display', 'inherit');
    }
    
    if(product.image_url === '') {
        isValid = false;
        $('#product-image').addClass('invalid-field');
        $('.img.error').css('display', 'inherit');
    }
    
    if(product.tags.length < 1) {
        isValid = false;
        $('.tags').addClass('invalid-field');
        $('.tag-list.error').css('display', 'inherit');
    }
    
    if(!product.price || product.price <= 0.00) {
        isValid = false;
        $('#product-price').addClass('invalid-field');
        $('.price.error').css('display', 'inherit');
    }
    
    return isValid;
}