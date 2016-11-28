/**
 * Created by Sam on 27/11/2016.
 */
var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function(app){

    router.post('/',
        bodyparser,
        app.actions.videos.create
    );

    router.delete('/:id',
        app.actions.videos.delete
    );

    router.get('/',
        app.actions.videos.list
    );

    //Recherche par id
    router.get('/:id',
        app.actions.videos.readById
    );

    return router;
};