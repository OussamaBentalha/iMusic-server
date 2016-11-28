/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.Video.findById(req.params.id, function(err, video){
            if (err)
                return res.status(500).send(video);

            var fs = require('fs');
            var readableStream = fs.createReadStream(global.appRoot + '/storage/video/'+ video.author + '/' + video.url);

            res.writeHead(200, {"Content-Type": "video/mp4"});
            readableStream.pipe(res);
        })
    }
};