/**
 * Movies.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      "title" : {"type": "string"},
      "year" : {"type": "string"},
      "genres" : {"type": "string"},
      "poster" : {"type": "string"},
      "directors" : {"type": "string"},
      "actors" : {"type": "string"},
      "writers" : {"type": "string"},
      "plot" : {"type": "string"},
      "lang" : {"type": "string"},
      "kind" : {"type": "string"},
      "ratings" : {},
      "imdbid" : {"type": "string"},
      "totalLikes" : {"type": "string"},
      "avgRatings" : {"type": "string"},
  },

  addmovie : function(movie, callback){
    // console.log("Here");
      Movies.create(movie).exec(function(err, result){
            if(err)
            {
                console.log("Error in Db Entry");
                return {'message' : 'Error'};
            }
            console.log("entered");
            callback(null, result);
      });
  },

  showall : function(callback){
    Movies.find().exec(function(err, result){
        if(err)
          return err;
        callback(null, result);
    });
  }
};
