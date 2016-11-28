/**
 * Created by Sam on 27/11/2016.
 */
module.exports = function(app){
    return {
        create: require('./create')(app),
        delete: require('./delete')(app),
        list: require('./list')(app),
        read: require('./read')(app),
        readById: require('./readById')(app)
    };
};