if(Meteor.isClient) {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : 1556592571288360,
            status     : true,
            xfbml      : true,
            version    : 'v2.0'
        });
    };
}

Router.configure({
    // we use the  appBody template to define the layout for the entire app
    layoutTemplate: 'appBody',
    trackPageView: true,

    // the appNotFound template is used for unknown routes and missing lists
    // notFoundTemplate: 'appNotFound',

    // show the appLoading template whilst the subscriptions below load their data
    // loadingTemplate: 'appLoading',

    // wait on the following subscriptions before rendering the page to ensure
    // the data it's expecting is present
    waitOn: function() {
        return [Meteor.subscribe('posts'), Meteor.subscribe('products'), Meteor.subscribe('userData')];
    }
});

Router.map(function() {
    this.route('home', {
        path: '/',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() { 
            return { posts: Posts.find({}, {sort: {post_date: -1}}, {limit: 10} ) };
        }
    });
    
    // Products Page
    this.route('products', {
        path: '/products',
        loadingTemplate: 'loading',
        action: function() {
            this.render('productList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { products: Products.find({expiration_date: {$gt: Date.now()}}, { sort: {expiration_date: -1}}) };
        }
    });
    
    // Search Style
    this.route('styleList', {
        path: '/style',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'style'}, {sort: {post_date: -1}}) };
        }
    });
    
    // Search Ambition
    this.route('ambitionList', {
        path: '/ambition',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'ambition'}, {sort: {post_date: -1}}) };
        }
    });
    
    // Search Drinks
    this.route('drinksList', {
        path: '/drinks',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'drinks'}, {sort: {post_date: -1}}) };
        }
    });
    
    // Search Life
    this.route('lifeList', {
        path: '/life',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'life'}, {sort: {post_date: -1}}) };
        }
    });
    
    this.route('login', {
        path: '/upper-management',
        action: function() {
            this.render('management');
        }
    });
    
    this.route('logout', {
        path: '/upper-management/logout',
        action: function() {
            Meteor.logout();
            Router.go('home');
        }
    });
    
    // Post management
    this.route('managePosts', {
        path: '/upper-management/posts',
        trackPageView: false,
        action: function() {
            this.render('addPost');
            this.render('adminPostSidebar', {to: 'sidebar'});
        }
    });
    
    this.route('manageUsers', {
        path: '/upper-management/users',
        trackPageView: false,
        action: function() {
            this.render('adminManageUsers');
            this.render('adminUsersSidebar', {to: 'sidebar'});
        }
    });
    
    this.route('manageProducts', {
        path: '/upper-management/products',
        trackPageView: false,
        action: function() {
            this.render('adminManageProducts');
            this.render('adminProductSidebar', {to: 'sidebar'});
        },
        waitOn: function() {
            return Meteor.subscribe('products');
        },
        data: function() {
            var min_date = Date.now();
            return { products: Products.find( {}, { sort: {expiration_date: -1} } ) };
        }
    });
    
    // Load Post
    this.route('post', {
        path: '/:category/:post_url',
        loadingTemplate: 'loading',
        data: function() {
            return Posts.findOne({category: this.params.category, url: encodeURIComponent(this.params.post_url)});
        },
        action: function() {
            this.render('post');
            this.render('sidebar', {to: 'sidebar'});
            this.render('relatedArticles', {to: 'relatedArticles'});
        },
        onAfterAction: function() {
            
            if (!Meteor.isClient)
                return;
            
            var _post = this.data();
            
            if (_post === undefined)
                return;
            
            if ((_post.title + " | Untucked Style").length <= 70) {
                _post.title += " | Untucked Style";
            }
            
            SEO.set({
                title: _post.title,
                meta: {
                    description: _post.short
                },
                og: {
                    title: _post.title,
                    description: _post.short,
                    image: _post.image_url
                }
            });
        }
    });
    
    this.route('catchAll', {
        path: '/(.*)',
        loadingTemplate: 'loading',
        action: function() {
            Router.go('home');
        }
    });
    
    var mustBeAdmin = function(pause) {
        if(!Meteor.user() || !Meteor.user().profile.admin) {
            Router.go('login');
            pause();
        }
        
        this.next();
    }
    
    var jrAdmin = function(pause) {
        if(!Meteor.user() || !(Meteor.user().profile.can_manage_products && Meteor.user().profile.can_post)) {
            Router.go('login');
            pause();
        }
        
        this.next();
    }
    
    var canPost = function(pause) {
        if(!Meteor.user() || !Meteor.user().profile.can_post) {
            Router.go('login');
            pause();
        }
        
        this.next();
    }
    
    var canManageProducts = function(pause) {
        if(!Meteor.user() || !Meteor.user().profile.can_manage_products) {
            Router.go('login');
            pause();
        }
        
        this.next();
    }
    
    var mustBeLoggedIn = function(pause) {
        if(!Meteor.user()) {
            Router.go('home');
            pause();
        }
        
        this.next();
    }
    
    var loginRedirect = function(pause) {
        if(Meteor.user() && Meteor.user().profile.can_post) {
            Router.go('managePosts');
            pause();
        }
        
        this.next();
    }
    
    var mustHaveData = function(pause) {
        if(this.data() === undefined) {
            // TODO: Redirect to not found page
            Router.go('home');
            pause();
        }
        
        this.next();
    }
    
    var setWindowInfo = function(pause) {
        window._post_count = 0;
    }
    
    Router.onBeforeAction(mustBeAdmin, {only: ['manageUsers']});
    Router.onBeforeAction(canPost, {only: ['managePosts']});
    Router.onBeforeAction(canManageProducts, {only: ['manageProducts']});
    Router.onBeforeAction(loginRedirect, {only: ['login']});
    Router.onBeforeAction(mustBeLoggedIn, {only: ['logout']});
    Router.onBeforeAction(mustHaveData, {only: ['post']});
    Router.onAfterAction(setWindowInfo);
});

Meteor.startup(function() {
    if(Meteor.isClient) {
        return SEO.config({
            title: "Untucked Style | Something Catchy",
            meta: {
                description: "The ultimate resource for millennial men."
            },
            og: {
                image: '/img/logo.png'
            }
        });
    }           
});