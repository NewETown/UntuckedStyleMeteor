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
    this.route('/',
               {
                action: function() {
                    this.render('postList');
                    this.render('sidebar', {to: 'sidebar'});
                },
                data: function() { return Posts.find(); }
               });
    
    this.route('/:category/:post_url', {
        where: 'server',
        action: function() {
            var data = Posts.findOne({category: this.params.category, url: this.params.post_url});
            
            var html = SSR.render('server_post', data);
            var response = this.response;

            response.writeHead(response.statusCode, {'Content-Type':'text/html'});
            response.end(html);
        }
    });
    
    this.route('/post-list', {
        where: 'server',
        action: function() {
            var posts = Posts.find();
            var html = SSR.render('post_list', {posts: posts});
            var response = this.response;
            
            response.writeHead(response.statusCode, {'Content-Type': 'text/html'});
            response.end(html);
        }
    });
});