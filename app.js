//grab the packages we need
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//configure the app
//==========================
//tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

//set the view engine to ejs
app.set('view engine', 'ejs');



//route to main page
app.get('/', function (req, res) {

  ig.user_self_media_recent(function(err, medias, pagination, remaining){ res.render('pages/index', { grams: medias});
});
});


//configure instagram app with client-id
ig.use({
access_token: '2133433041.1677ed0.d64f459a2f8e498fa7b1a2488997c8a2'

});

// ig.user_self_media_recent(function(err, medias, pagination, remaining, limit)

//set the routes
//=========================
//home page route - our profile's images
app.get('/', function(req, res) {
  //use the instagram package to get media
  //render home page and pass in profile images
  res.render('pages/index');
});


//start the server on port 3000
app.listen(3000);
//send a message
console.log('server has started by zz');
