var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const session = require('express-session');
// After you declare "app"
// app.use(session({ secret: 'melody hensley is my spirit animal' }));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

const cors = require('cors');
 app.use(cors());
app.use(bodyParser.json())

require('./app/router/router.js')(app);
/*global.__basedir = __dirname;

let router = require('./app/router/file.router.js');
app.use(express.static('resources'));
app.use('/', router);*/




//require('./app/route/project.route.js')(app);

// Create a Server
var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = process.env.PORT || 3000;

  console.log("App listening at http://%s:%s", host, port)

  console.log("serveur Back-end")
})


