// if the database is empty on server start, create some sample data.
Meteor.startup(function () {
    if (Posts.find().count() === 0) {
        var data = [
          {title: "Some Major Thing",
           short: "This is the test spotlight post.",
           author: "Everett Carney",
           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida consectetur metus vitae fermentum. Mauris finibus ligula et venenatis iaculis. Vestibulum mollis ornare libero in vestibulum. In at lorem a turpis tristique finibus. Praesent in commodo tortor. Sed condimentum, dolor vitae iaculis aliquam, neque enim posuere ipsum, vel commodo arcu magna non eros. Sed sed lobortis augue, ut consequat tortor. Etiam congue lorem enim, in facilisis elit porta vitae. Pellentesque egestas lacinia est, ac vulputate erat commodo malesuada. Phasellus placerat consequat vulputate. In mi libero, faucibus in laoreet condimentum, porta sit amet tortor. Morbi gravida ligula id luctus faucibus.</p><p>Nulla auctor nisi eget diam fringilla porta. Vestibulum consequat leo ultricies, iaculis tortor nec, vehicula sapien. Praesent ut nulla sem. Mauris bibendum, neque vitae porta feugiat, dolor nunc facilisis ante, ut consequat velit nulla gravida libero. Maecenas semper, turpis vitae sagittis tristique, tortor felis vehicula lorem, eu consequat lorem purus in sapien. Donec eros orci, dictum sit amet sem non, eleifend pharetra ligula. Quisque euismod sodales dui, a bibendum libero interdum ut. Donec tempus laoreet arcu, nec blandit ante. Donec cursus velit erat, ac vulputate neque tincidunt pellentesque. Sed et tellus sit amet nisi pretium maximus ut tincidunt ipsum. Curabitur mi tortor, ultricies id pharetra non, tincidunt in ligula. Mauris ut hendrerit dolor. Vestibulum magna diam, pharetra eu nulla ut, vulputate faucibus lacus. Phasellus imperdiet vel mauris ac faucibus.</p><p>Nam luctus urna tempor, faucibus leo sit amet, consequat erat. Pellentesque quis sapien dui. Integer iaculis bibendum tortor eu dignissim. Proin euismod, arcu in mattis imperdiet, eros purus molestie nisi, in sodales purus velit sit amet urna. Donec pulvinar gravida mi eu tristique. Sed at dignissim ante, vel rhoncus dolor. Nullam venenatis, nulla ac consequat fringilla, orci sapien sollicitudin tortor, ac dictum libero ante quis metus. Donec luctus nisi nisi, ac sollicitudin sapien pellentesque eu. Duis nec rutrum sem.",
           post_date: "01/01/15",
           spotlight: true,
           url: "some-major-thing",
           category: "drinks",
           tags: ["cocktail", "whiskey", "manhattan"],
           image_url: "http://www.bubcitychicago.com/wp-content/uploads/whiskey-bar.jpg"
          },
          {title: "Test Post 1",
           short: "This is test post 1.",
           author: "Everett Carney",
           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida consectetur metus vitae fermentum. Mauris finibus ligula et venenatis iaculis. Vestibulum mollis ornare libero in vestibulum. In at lorem a turpis tristique finibus. Praesent in commodo tortor. Sed condimentum, dolor vitae iaculis aliquam, neque enim posuere ipsum, vel commodo arcu magna non eros. Sed sed lobortis augue, ut consequat tortor. Etiam congue lorem enim, in facilisis elit porta vitae. Pellentesque egestas lacinia est, ac vulputate erat commodo malesuada. Phasellus placerat consequat vulputate. In mi libero, faucibus in laoreet condimentum, porta sit amet tortor. Morbi gravida ligula id luctus faucibus.</p><p>Nulla auctor nisi eget diam fringilla porta. Vestibulum consequat leo ultricies, iaculis tortor nec, vehicula sapien. Praesent ut nulla sem. Mauris bibendum, neque vitae porta feugiat, dolor nunc facilisis ante, ut consequat velit nulla gravida libero. Maecenas semper, turpis vitae sagittis tristique, tortor felis vehicula lorem, eu consequat lorem purus in sapien. Donec eros orci, dictum sit amet sem non, eleifend pharetra ligula. Quisque euismod sodales dui, a bibendum libero interdum ut. Donec tempus laoreet arcu, nec blandit ante. Donec cursus velit erat, ac vulputate neque tincidunt pellentesque. Sed et tellus sit amet nisi pretium maximus ut tincidunt ipsum. Curabitur mi tortor, ultricies id pharetra non, tincidunt in ligula. Mauris ut hendrerit dolor. Vestibulum magna diam, pharetra eu nulla ut, vulputate faucibus lacus. Phasellus imperdiet vel mauris ac faucibus.</p><p>Nam luctus urna tempor, faucibus leo sit amet, consequat erat. Pellentesque quis sapien dui. Integer iaculis bibendum tortor eu dignissim. Proin euismod, arcu in mattis imperdiet, eros purus molestie nisi, in sodales purus velit sit amet urna. Donec pulvinar gravida mi eu tristique. Sed at dignissim ante, vel rhoncus dolor. Nullam venenatis, nulla ac consequat fringilla, orci sapien sollicitudin tortor, ac dictum libero ante quis metus. Donec luctus nisi nisi, ac sollicitudin sapien pellentesque eu. Duis nec rutrum sem.",
           post_date: "01/01/15",
           spotlight: false,
           url: "test-post-1",
           category: "life",
           tags: ["enterpreneurship", "job", "career"],
           image_url: "http://stylesthatworkformen.com/wp-content/uploads/2014/05/HM-Sunny-Getaway-2014-Men%E2%80%99s-Lookbook.jpg"
          },
          {title: "Test Post 2 Again",
           short: "This is test post 2.",
           author: "Everett Carney",
           content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida consectetur metus vitae fermentum. Mauris finibus ligula et venenatis iaculis. Vestibulum mollis ornare libero in vestibulum. In at lorem a turpis tristique finibus. Praesent in commodo tortor. Sed condimentum, dolor vitae iaculis aliquam, neque enim posuere ipsum, vel commodo arcu magna non eros. Sed sed lobortis augue, ut consequat tortor. Etiam congue lorem enim, in facilisis elit porta vitae. Pellentesque egestas lacinia est, ac vulputate erat commodo malesuada. Phasellus placerat consequat vulputate. In mi libero, faucibus in laoreet condimentum, porta sit amet tortor. Morbi gravida ligula id luctus faucibus.</p><p>Nulla auctor nisi eget diam fringilla porta. Vestibulum consequat leo ultricies, iaculis tortor nec, vehicula sapien. Praesent ut nulla sem. Mauris bibendum, neque vitae porta feugiat, dolor nunc facilisis ante, ut consequat velit nulla gravida libero. Maecenas semper, turpis vitae sagittis tristique, tortor felis vehicula lorem, eu consequat lorem purus in sapien. Donec eros orci, dictum sit amet sem non, eleifend pharetra ligula. Quisque euismod sodales dui, a bibendum libero interdum ut. Donec tempus laoreet arcu, nec blandit ante. Donec cursus velit erat, ac vulputate neque tincidunt pellentesque. Sed et tellus sit amet nisi pretium maximus ut tincidunt ipsum. Curabitur mi tortor, ultricies id pharetra non, tincidunt in ligula. Mauris ut hendrerit dolor. Vestibulum magna diam, pharetra eu nulla ut, vulputate faucibus lacus. Phasellus imperdiet vel mauris ac faucibus.</p><p>Nam luctus urna tempor, faucibus leo sit amet, consequat erat. Pellentesque quis sapien dui. Integer iaculis bibendum tortor eu dignissim. Proin euismod, arcu in mattis imperdiet, eros purus molestie nisi, in sodales purus velit sit amet urna. Donec pulvinar gravida mi eu tristique. Sed at dignissim ante, vel rhoncus dolor. Nullam venenatis, nulla ac consequat fringilla, orci sapien sollicitudin tortor, ac dictum libero ante quis metus. Donec luctus nisi nisi, ac sollicitudin sapien pellentesque eu. Duis nec rutrum sem.",
           post_date: "01/01/15",
           spotlight: false,
           url: "test-post-2",
           category: "clothes",
           tags: ["lounge", "comfort", "moderate"],
           image_url: "http://www.lambertinc.com/wp-content/uploads/2014/03/santa-monica-pier-at-sunset.jpg"
          }
        ];

        var timestamp = (new Date()).getTime();
        _.each(data, function(post) {
          Posts.insert({
                        title: post.title,
                        author: post.author,
                        short: post.short,
                        content: post.content,
                        post_date: post.post_date,
                        spotlight: post.spotlight,
                        url: post.url,
                        category: post.category,
                        tags: post.tags,
                        image_url: post.image_url
                     });
        });
    }
    
    if(Meteor.users.find().count() == 0) {
        console.log('No users');
        Accounts.createUser({
            username: "everett@mentaltangent.net",
            password: "pa$$w0rd",
            email: "everett@mentaltangent.net",
            profile: {name: "Everett", is_admin: true}
        });
    } else {
        console.log("There is a user");
    }
    
    Accounts.config({
        forbidClientAccountCreation: true
    });
});