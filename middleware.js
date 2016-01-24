/**
 * Created by jfujimaki on 2016-01-24.
 */

module.exports =  {
        requireAuthentication: function(req, res, next){
            console.log("this route is private");
            next();
        },
        logger: function(req, res, next){
            console.log('Request: ' + (new Date().toString()) + req.method + ' ' + req.originalUrl);
            next();
        }

}