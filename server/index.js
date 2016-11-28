require('./global');
var express = require('express');
var api = express();

var path = require('path');
global.appRoot = path.resolve(__dirname);

(function init(){
    api.use(express.static('storage'));
    require('./settings')(api);
    require('./models')(api);
    require('./actions')(api);
    require('./routes')(api);
}());

(function start() {
    api.listen(api.settings.port, '0.0.0.0');
    console.log('Server listening on port :port'.replace(':port',  api.settings.port));
}());