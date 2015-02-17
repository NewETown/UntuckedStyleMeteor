Template.management.events({

    'submit #login-form' : function(e, t){
        e.preventDefault();
        
        var email = trimInput(t.find('#login-email').value), password = trimInput(t.find('#login-password').value);
        
        if(email.length > 0 && isValidPassword(password)) {
            Meteor.loginWithPassword(email, password, function(err){
                if (err) {
                    console.log(err);
                    return false;
                }
                
                Router.go('managePosts');
            });
        } else {
            Console.log('Replace this with error message');
        }
            
        return false; 
    }
});