/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){

        app.models.Music.find(function(err, musics){
            if(err)
                return res.status(500).send(err);

            res.send(musics);
        });

    }
};