/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.Music.findById(req.params.id, function(err, music){
            if (err)
                return res.status(500).send(music);

            var fs = require('fs');
            var readableStream = fs.createReadStream(global.appRoot + '/storage/music/'+ music.author + '/' + music.url);

            res.writeHead(200, {"Content-Type": "audio/wav"});
            readableStream.pipe(res);
        })
    }
};
