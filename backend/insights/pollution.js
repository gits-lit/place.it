/**
 * Performs extremely advanced machine learning (trust us) that has been reduced to 2 numbers.
 * Full notebook available in GitHub —> https://github.com/gits-lit/place.it/tree/master/backend/modules/ratingApi
 * Data from https://data.lacity.org/A-Livable-and-Sustainable-City/Existing-Buildings-Energy-Water-Efficiency-EBEWE-P/9yda-i4ya
 */
module.exports = function(squareFootage) {
    let intercept = 39.50294435044748;
    let coef = 0.003417097532735685;
    let carbon = coef * squareFootage + intercept;
    let ratio = carbon / squareFootage;
    return {
        carbon: carbon,
        rating: (ratio < 0.0015) ? 4 : (ratio < 0.0025) ? 3 : (ratio < 0.0035) ? 2 : (ratio < 0.0055) ? 1 : 0
    }
}