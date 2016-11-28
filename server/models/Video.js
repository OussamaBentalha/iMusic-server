/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    var VideoSchema = app.mongoose.Schema({
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        }
    });

    VideoSchema.plugin(require('mongoose-timestamp'));

    var Video = app.mongoose.model('Video', VideoSchema);
    return Video;
};