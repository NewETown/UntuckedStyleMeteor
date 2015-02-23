Template.managePosts.rendered = function() {
    var FETCHING_PICTURE = false;
    
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

Template.managePosts.events({
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
        
        if(validate(newPost)) {
            console.log('Submit');
            Posts.insert({
                title: newPost.title,
                author: newPost.author,
                short: newPost.short,
                content: newPost.content,
                post_date: newPost.post_date,
                spotlight: newPost.spotlight,
                url: newPost.url,
                category: newPost.category,
                tags: newPost.tags,
                image_url: newPost.image_url
            });
            resetEverything();
        } else {
            console.log("ERROR: Invalid post");
        }
    }
});

Template.managePosts.helpers({
    getCategories: function() {
        // Eventually this should query the DB but with only 4 it doesn't matter
        var categories = ["BASICS", "CLOTHES", "DRINKS", "LIFE"];
        return categories;
    }
});

function setImage(url) {
    $('.img-preview').attr('src', url);
}

function validate(post) {
    
    // TODO: Change this to return a list of errors so I can display that list
    if(!post.title)
        return false;
    
    if(!post.author)
        return false;
    
    if(post.content.length < 400)
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
}