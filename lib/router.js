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

var FB_APP_ID = "1556592571288360";
var BASE_URL = "http://beta.untuckedstyle.com/";
var SEO_DEFAULTS = {
    title: "Untucked Style",
    description: "The ultimate lifestyle resource for modern men.",
    image: BASE_URL + 'img/serif_logo.png',
    meta: {
        type: 'article'
    },
    og: {
        site_name: 'Untucked Style',
        url: BASE_URL,
        type: 'article'
    },
    fb: {
        app_id: FB_APP_ID,
        admins: ["557752074", "10152784901127607"]
    },
    twitter: {
        card: "summary_large_image",
        site: "@untuckedstyle",
        creator: "@untuckedstyle",
        site_name: 'Untucked Style',
    }
};

Meteor.startup(function() {
    if(Meteor.isClient) {
        Router.plugin('seo');
    }
});

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
    },
    fastRender: true
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
            return { posts: Posts.find({}, {sort: {post_date: -1}}, {limit: 15} ) };
        },
        seo: {
            title: "Untucked Style",
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    // Products Page
    this.route('shop', {
        path: '/shop',
        loadingTemplate: 'loading',
        action: function() {
            this.render('productList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { products: Products.find({expiration_date: {$gt: Date.now()}}, { sort: {expiration_date: -1}}) };
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Shop"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    // Search Style
    this.route('style', {
        path: '/style',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'style'}, {sort: {post_date: -1}}) };
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Style"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    // Search Ambition
    this.route('ambition', {
        path: '/ambition',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'ambition'}, {sort: {post_date: -1}}) };
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Ambition"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    // Search Drinks
    this.route('drinks', {
        path: '/drinks',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'drinks'}, {sort: {post_date: -1}}) };
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Drinks"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    // Search Life
    this.route('life', {
        path: '/life',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'life'}, {sort: {post_date: -1}}) };
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Life"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
        }
    });
    
    this.route('login', {
        path: '/upper-management',
        action: function() {
            this.render('management');
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Login"
            }
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
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Manage Posts"
            }
        }
    });
    
    this.route('manageUsers', {
        path: '/upper-management/users',
        trackPageView: false,
        action: function() {
            this.render('adminManageUsers');
            this.render('adminUsersSidebar', {to: 'sidebar'});
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Manage Users"
            }
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
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "Manage Products"
            }
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
        seo: {
            title:  function() {
                return this.data().title + " | Untucked Style" <= 70 ? this.data().title + " | Untucked Style" : this.data().title;
            },
            description: function() {
                return this.data().short;
            },
            image: function() {
                return this.data().image_url;
            },
            url: function() {
                return BASE_URL+this.data().category+'/'+this.data().url;
            },
            type: 'article',
            meta: {
                type: 'article',
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            og: {
                site_name: 'Untucked Style',
            },
            twitter: {
                card: "summary_large_image",
                site: "@UntuckedStyle",
                creator: "@UntuckedStyle",
            }
        }
    });
    
    this.route('catchAll', {
        path: '/(.*)',
        loadingTemplate: 'loading',
        action: function() {
            Router.go('home');
        },
        seo: {
            title: {
                text: "Untucked Style",
                separator: "|",
                suffix: "NOT FOUND!"
            },
            description: "The ultimate lifestyle resource for modern men.",
            image: BASE_URL + 'img/serif_logo.png',
            meta: {
                type: 'article'
            },
            og: {
                site_name: 'Untucked Style',
                url: BASE_URL,
                type: 'article'
            },
            fb: {
                app_id: FB_APP_ID,
                admins: ["557752074", "10152784901127607"]
            },
            twitter: {
                card: "summary_large_image",
                site: "@untuckedstyle",
                creator: "@untuckedstyle",
                site_name: 'Untucked Style',
            }
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
    
    Router.onBeforeAction(mustBeAdmin, {only: ['manageUsers']});
    Router.onBeforeAction(canPost, {only: ['managePosts']});
    Router.onBeforeAction(canManageProducts, {only: ['manageProducts']});
    Router.onBeforeAction(loginRedirect, {only: ['login']});
    Router.onBeforeAction(mustBeLoggedIn, {only: ['logout']});
    Router.onBeforeAction(mustHaveData, {only: ['post']});
});
