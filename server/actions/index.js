module.exports = function(app){
    app.actions = {};
    app.actions.auth = require('./auth')(app);
    app.actions.users = require('./users')(app);
    app.actions.categories = require('./categories')(app);
    app.actions.events = require('./events')(app);
    app.actions.musics = require('./musics')(app);
    app.actions.videos = require('./videos')(app);
};