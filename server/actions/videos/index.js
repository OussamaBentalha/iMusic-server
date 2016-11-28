/**
 * Created by Sam on 28/11/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        delete: require('./delete')(app),
        list: require('./list')(app),
        readById: require('./readById')(app)
    };
};