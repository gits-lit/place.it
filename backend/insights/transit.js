const request = require("request");
const quickRate = require("../utils/rating").quickRateLarger;

/**
 * Calculates the transit score for a specific area
 * Data from https://www.walkscore.com/
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
                    body.transit.rating = quickRate(body.transit.score, 80, 60, 40, 20);
                    body.bike.rating = quickRate(body.bike.score, 80, 60, 40, 20);
                    const walkRating = quickRate(body.walkscore, 80, 60, 40, 20);
                    const avgRating = (body.transit.rating + body.bike.rating + walkRating) / 3;

                    resolve({
                        rating: avgRating,
                        walk: {
                            score: body.walkscore,
                            description: body.description,
                            rating: walkRating
                        },
                        transit: body.transit,
                        bike: body.bike,
                        detailLink: body.ws_link
                    })
                } else {
                    resolve({
                        loading: "we're still loading data for this coordinate. please try again in 30 seconds.",
                        rating: -1
                    })
                }
            }
        })
    })
}