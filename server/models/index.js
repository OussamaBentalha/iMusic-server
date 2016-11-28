var mongoose = require('mongoose');

module.exports = function(app){
    app.mongoose = mongoose.connect(app.settings.db);

    app.models = {};
    app.models.User = require('./User')(app);
    app.models.Category = require('./Category')(app);
    app.models.Event = require('./Event')(app);
    app.models.Music = require('./Music')(app);
    app.models.Video = require('./Video')(app);
};