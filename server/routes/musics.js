/**
 * Created by Sam on 27/11/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){

    router.post('/',
        bodyparser,
        app.actions.musics.create
    );

    router.delete('/:id',
        app.actions.musics.delete
    );

    router.get('/',
        app.actions.musics.list
    );

    router.get('/clandestina/',
        app.actions.musics.read
    );

    //Recherche par id
    router.get('/:id',
        app.actions.musics.readById
    );

    return router;
};