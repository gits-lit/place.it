const spotcrime = require('spotcrime');

/**
 * Returns the number of crimes in the area for a given location
 */
module.exports = async function(lat, lng) {
    return new Promise(async (resolve, reject) => {
        spotcrime.getCrimes({
            lat: lat, lon: lng
        }, (err, crimes) => {
            if (err) {
                console.log(err);
                resolve(0);
            } else {
                resolve(crimes.length);
            }
        })
    })
}