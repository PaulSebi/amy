var omdb = require('omdb');

module.exports = {
			filldb: function(req, res){
					console.log('Params',req.query.prefix.length);
					var functional_str  = req.query.prefix,
					n = 8 - functional_str.length,
					id = "", i;

					for(i= Math.pow(10, n); i < 10*Math.pow(10, n); i++){
							id = functional_str + i.toString();
							console.log(id);
							omdb.get(id, function(err, movie){
									if(err)
									{
										console.log('No Such Movies');
										return;
									}
									if(!movie || movie.type != 'movie')
									{
										console.log('No Such Movies');
										return;
									}
									var formatted = {};
									console.log(movie.imdb.id, movie.type);
									formatted = {
											'title' : (typeof movie.title == undefined? "" : movie.title),
											'year' : (typeof movie.year == undefined? "" : movie.year),
											'genres' : (typeof movie.genres == undefined? "" : movie.genres),
											'poster' : (typeof movie.poster == undefined? "" : movie.poster),
											'directors' : (typeof movie.director == undefined? "" : movie.director),
											'actors' : (typeof movie.actors == undefined? "" : movie.actors),
											'writers' : (typeof movie.writers == undefined? "" : movie.writers),
											'plot' : (typeof movie.plot == undefined? "" : movie.plot),
											'lang' : (typeof movie.language == undefined? "" : movie.language),
											'kind' : (typeof movie.type == undefined? "" : movie.type),
											'ratings' : {
													'imdb' : (typeof movie.imdb.rating == undefined? "" : movie.imdb.rating),
													'tomato' : (typeof movie.tomato == undefined? "" : movie.tomato),
													'metacritic' : (typeof movie.metacritic == undefined? "" : movie.metacritic)
												},
											'imdbid' : (typeof movie.imdb.id == undefined? "" : movie.imdb.id),
											'totalLikes' : 0,
											'avgRatings' : 0
									};
									Movies.addmovie(formatted, function(err, added){
											if(err)
												console.log(err);
											console.log('Added ------->>',added.title);
									});
							});
					}
			},


			viewall : function(req, res){
						showall(function(err, movielist){
									if(err)
											res.json({'message':'Error In Fetching from Db'});
									res.json(movielist);
						});
			}
};
