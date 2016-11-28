/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var music = new app.models.Music({
            title: req.body.title,
            author: req.body.author,
            url: req.body.url
        });

        music.save(function(err, instance){
            if (err)
                return res.status(500).send(err);

            res.send(instance);
        });
    }
};