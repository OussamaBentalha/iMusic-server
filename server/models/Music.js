/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    var MusicSchema = app.mongoose.Schema({
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

    MusicSchema.plugin(require('mongoose-timestamp'));

    var Music = app.mongoose.model('Music', MusicSchema);
    return Music;
};