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
    return Meteor.subscribe('posts');
  }
});

Router.map(function() {
    this.route('home',
               {
                path: '/',
                action: function() {
                    this.render('postList');
                    this.render('sidebar', {to: 'sidebar'});
                },
                data: function() { return Posts.find(); }
               });
    
//    this.route('/:category/:post_url',
//               {
//                template: 'raw',
//                layoutTemplate: 'direct_layout',
//                loadingTemplate: 'loading',
//                data: function() {
//                    return Posts.findOne({category: this.params.category, url: this.params.post_url});
//                },
//                action: function() { this.render('post'); }
//               });
    
    this.route('serverRoute', {
        where: 'server',
        path: '/:category/:post_url',
        action: function() {
            var data = Posts.findOne({category: this.params.category, url: this.params.post_url});

            this.response.writeHead(200, {'Content-Type': 'text/html'});
            this.response.end(data);
        }
    });
});