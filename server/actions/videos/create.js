/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var video = new app.models.Video({
            title: req.body.title,
            author: req.body.author,
            url: req.body.url
        });

        video.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};