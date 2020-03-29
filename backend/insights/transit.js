const request = require("request");
/**
 * Calculates the transit score for a specific area
 */
module.exports = async function(lat, lng) {
    return new Promise(async (resolve, reject) => {
        let apiKey = process.env.WALKSCORE_API_KEY;

        request.get({
            url: `http://api.walkscore.com/score`,
            qs: {
                format: "json",
                lat: lat,
                lon: lng,
                transit: 1,
                bike: 1, 
                wsapikey: apiKey
            }
        }, (err, response, body) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                body = JSON.parse(body);
                
                if (body.status == 1) {
                    body.transit.rating = (body.transit.score > 100) ? "amazing" : (body.transit.score > 50) ? "okay" : "bad"
                    body.bike.rating = (body.bike.score > 100) ? "amazing" : (body.bike.score > 50) ? "okay" : "bad"
                
                    resolve({
                        walk: {
                            score: body.walkscore,
                            description: body.description,
                            rating: (body.walkscore > 100) ? "amazing" : (body.walkscore > 50) ? "okay" : "bad"
                        },
                        transit: body.transit,
                        bike: body.bike,
                        detailLink: body.ws_link
                    })
                } else {
                    resolve({
                        loading: "we're still loading data for this coordinate. please try again in 30 seconds."
                    })
                }
            }
        })
    })
}