/**
 * Created by Sam on 27/11/2016.
 */
module.exports = function(app){
    return function(req, res, next){
        var fs = require('fs');
        console.log("Global path : " + global.appRoot );
        var readableStream = fs.createReadStream(global.appRoot +'/storage/music/clandestina.wav');

        res.writeHead(200, {"Content-Type": "audio/wav"});
        readableStream.pipe(res);


        /*var data = '';
        var chunk;

        readableStream.on('readable', function() {
            while ((chunk=readableStream.read()) != null) {
                data += chunk;
            }
        });



        readableStream.on('end', function() {
            console.log(data)
        });


        http.createServer(function(request, response) {
            response.writeHead(200, {"Content-Type": "audio/wav"});
            var rs = fs.createReadStream("my_sound.wav");
            rs.pipe(response);
        }).listen(3000)*/



        /*var event = new app.models.Event({
            title: req.body.title,
            description: req.body.description,
            eventDate: req.body.eventDate,
            categoryId: req.body.categoryId,
            organizerId: req.session.userId,
            participantsId: req.session.userId
        });

        event.save(function(err, instance){
            if(err)
                return res.status(500).send(err);

            res.send(instance);
        });*/
    }
};
