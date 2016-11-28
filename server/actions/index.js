module.exports = function(app){
    app.actions = {};
    app.actions.musics = require('./musics')(app);
    app.actions.videos = require('./videos')(app);
};