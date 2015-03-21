Template.addPost.rendered = function() {
    var FETCHING_PICTURE = false;
    window._POST_ID = null;
    
    $('#delete').prop('disabled', true);
    
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
            $('.img-preview').attr('src', '').css('display','none');
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
        newPost["author"] = Meteor.user().profile.firstname + " " + Meteor.user().profile.lastname;
        newPost["author_id"] = Meteor.user()._id;
        newPost["image_url"] = $('.img-preview').attr('src');
        newPost["title"] = $('#post-title').val();
        newPost["url"] = toUrl(newPost.title);
        newPost["short"] = $('#post-short').val();
        newPost["spotlight"] = false;
        
        $('.invalid-field').removeClass('invalid-field');
        
        if(validatePost(newPost)) {
            Meteor.call('postUpsert', window._POST_ID, newPost);
            resetEverything();
        }
    },
    'click #delete': function() {
        if(window._POST_ID != undefined && confirm('Are you sure?')) {
            Meteor.call('postDelete', window._POST_ID);
            resetEverything();
        }
    }
});

Template.addPost.helpers({
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
    $('#post-category').val('PICK ONE');
    $('textarea').each(function() { this.value = ''; });
    $('.img-preview').attr('src','');
    window._POST_ID = null;
    $('#delete').prop('disabled',true);
}

function validatePost(post) {
    var isValid = true;
    
    if(!post.title || post.title > 70) {
        isValid = false;
        $('#post-title').addClass('invalid-field');
        console.log('ERROR: Invalid title');
    }
    
    if(!post.author) {
        isValid = false;
        console.log('ERROR: Invalid post author');
    }
    
    if(post.content.length < 400 || post.content.length === 0) {
        isValid = false;
        $('#post-content').addClass('invalid-field');
        console.log('ERROR: Invalid title');
    }
    
    if(post.short.length > 154 || post.short.length === 0) {
        isValid = false;
        $('#post-short').addClass('invalid-field');
        console.log('ERROR: Invalid short description');
    }
    
    if(post.url === null) {
        isValid = false;
        console.log('ERROR: Invalid URL');
    }
    
    if(post.category === "pick one") {
        isValid = false;
        $('#post-category').addClass('invalid-field');
        console.log('ERROR: Please select a category');
    }
    
    if(post.image_url === '') {
        isValid = false;
        $('#post-background-picture').addClass('invalid-field');
        console.log('ERROR: Invalid picture URL');
    }
    
    if(post.tags.length < 1) {
        isValid = false;
        $('.tags').addClass('invalid-field');
        console.log('ERROR: You must include at least one tag');
    }
    
    return isValid;
}