Template.addPost.rendered = function() {
    var FETCHING_PICTURE = false;
    window._POST_ID = null;
    
    $('#delete').prop('disabled',true);
    
    $('#post-background-picture').focusout(function(e) {
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

Template.addPost.events({
    'click #submit': function() {
        var newPost = {};
        
        newPost["category"] = $('#post-category').val().toLowerCase();
        newPost["content"] = $('#post-content').val();
        newPost["tags"] = getTags();
        newPost["post_date"] = Date.now();
        newPost["author"] = Meteor.user().profile.name;
        newPost["image_url"] = $('.img-preview').attr('src');
        newPost["title"] = $('#post-title').val();
        newPost["url"] = toUrl(newPost.title);
        newPost["short"] = $('#post-short').val();
        newPost["spotlight"] = false; // Not in use
        
        if(validatePost(newPost)) {
            Meteor.call('postUpsert', window._POST_ID, newPost);
            resetEverything();
        } else {
            console.log("ERROR: Invalid post");
        }
    },
    'click #delete': function() {
        if(window._POST_ID != undefined && confirm('Are you sure?')) {
            Meteor.call('postDelete', window._POST_ID);
            resetEverything();
        } else {
            console.log('Cancel');
        }
    }
});

Template.addPost.helpers({
    getCategories: function() {
        var categories = ["STYLE", "AMBITION", "DRINKS", "SOCIAL", "LIFE"];
        return categories;
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
    window._POST_ID = null;
    $('#delete').prop('disabled',true);
}