const spotcrime = require('spotcrime');
const quickRate = require("../utils/rating").quickRateSmaller;
/**
 * Returns the number of crimes in the area for a given location
 * Data from https://spotcrime.com/
 */
module.exports = async function(lat, lng) {
    return new Promise(async (resolve, reject) => {
        spotcrime.getCrimes({
            lat: lat, lon: lng
        }, (err, crimes) => {
            if (err) {
                console.log(err);
                resolve({
                    crimes: 0,
                    rating: -1
                });
            } else {
                resolve({
                    crimes: crimes.length,
                    rating: quickRate(crimes, 0, 15, 30, 40)
                });
            }
        })
    })
}