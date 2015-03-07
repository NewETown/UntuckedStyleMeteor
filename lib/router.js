Router.configure({
  // we use the  appBody template to define the layout for the entire app
  layoutTemplate: 'appBody',

  // the appNotFound template is used for unknown routes and missing lists
  // notFoundTemplate: 'appNotFound',

  // show the appLoading template whilst the subscriptions below load their data
  // loadingTemplate: 'appLoading',

  // wait on the following subscriptions before rendering the page to ensure
  // the data it's expecting is present
  waitOn: function() {
      return [Meteor.subscribe('posts'), Meteor.subscribe('products')];
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
    this.route('productsList', {
        path: '/products',
        loadingTemplate: 'loading',
        action: function() {
            this.render('productList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { products: Products.find({}, { sort: {expiration_date: -1}}) };
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
    
    // Search Social
    this.route('socialList', {
        path: '/social',
        loadingTemplate: 'loading',
        action: function() {
            this.render('postList');
            this.render('sidebar', {to: 'sidebar'});
        },
        data: function() {
            return { posts: Posts.find({category: 'social'}, {sort: {post_date: -1}}) };
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
    
    // Create new post
    this.route('writePost', {
        path: '/upper-management/write',
        action: function() {
            // check to see if user is logged in as admin
            this.render('add_post');
            this.render('adminSidebar', {to: 'sidebar'});
        }
    });
    
    // Post management
    this.route('managePosts', {
        path: '/upper-management/posts',
        action: function() {
            this.render('manage_posts');
            this.render('adminPostSidebar', {to: 'sidebar'});
        }
    });
    
    // User management
    this.route('manageUsers', {
        path: '/upper-management/users',
        action: function() {
            // check to see if user is logged in as admin
            this.render('manage_users');
        }
    });
    
    this.route('addProduct', {
        path: '/upper-management/products', 
        action: function() {
            this.render('addProduct');
            this.render('adminProductSidebar', {to: 'sidebar'});
        },
        waitOn: function() {
            return Meteor.subscribe('products');
        },
        data: function() {
            var min_date = Date.now();
            return { products: Products.find( {expiration_date: {$gt: min_date} }, { sort: {expiration_date: -1} } ) };
        }
    });
    
    // Load Post
    this.route('post', {
        path: '/:category/:post_url',
        loadingTemplate: 'loading',
        action: function() {
            this.render('post');
            this.render('sidebar', {to: 'sidebar'});
            this.render('relatedArticles', {to: 'relatedArticles'});
        },
        data: function() {
            return Posts.findOne({category: this.params.category, url: encodeURIComponent(this.params.post_url)});
        }
    });
    
    this.route('catchAll', {
        path: '/*',
        loadingTemplate: 'loading',
        action: function() {
            Router.go('home');
        }
    });
    
    var mustBeAdmin = function(pause) {
        if(!Meteor.user() || !Meteor.user().profile.is_admin) {
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
        if(Meteor.user() && Meteor.user().profile.is_admin) {
            Router.go('writePost');
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
    
    Router.onBeforeAction(mustBeAdmin, {only: ['writePost', 'manageUsers', 'managePosts', '/upper-management/products']});
    Router.onBeforeAction(loginRedirect, {only: ['login']});
    Router.onBeforeAction(mustBeLoggedIn, {only: ['logout']});
    Router.onBeforeAction(mustHaveData, {only: ['post']});
    Router.onAfterAction(setWindowInfo);
});

// Old SSR stuff
//    this.route('/:category/:post_url', {
//        where: 'server',
//        action: function() {
//            var data = Posts.findOne({category: this.params.category, url: this.params.post_url});
//            
//            var html = SSR.render('server_post', data);
//            var response = this.response;
//
//            response.writeHead(response.statusCode, {'Content-Type':'text/html'});
//            response.end(html);
//        }
//    });
    
//    this.route('/post-list', {
//        where: 'server',
//        action: function() {
//            var posts = Posts.find();
//            var html = SSR.render('post_list', {posts: posts});
//            var response = this.response;
//            
//            response.writeHead(response.statusCode, {'Content-Type': 'text/html'});
//            response.end(html);
//        }
//    });