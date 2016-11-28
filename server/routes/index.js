module.exports = function(app){
    app.use('/api/musics', require('./musics')(app));
    app.use('/api/videos', require('./videos')(app));
};