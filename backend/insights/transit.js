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
                    resolve({
                        walk: {
                            score: body.walkscore,
                            description: body.description,
                        },
                        transit: body.transit,
                        bike: body.bike,
                        detailLink: body.ws_link
                    })
                } else {
                    resolve(body.status)
                }
            }
        })
    })
}