const quickRate = require("../utils/rating").quickRateSmaller;

/**
 * Parking Data from https://library.municode.com/ca/los_angeles_county/codes/code_of_ordinances?nodeId=TIT22PLZO_DIV6DEST_CH22.112PA
 * Office Building, Family, Retail Store, Residential, Commercial, Office/Industrial, Public, Mixed Use, Miscellaneous
 */
const parkingRates = {
    "Office Building": 
        (squareFootage) => {
            let spots = squareFootage * (1/400);
            return {
                spots: spots,
                rating: quickRate(spots, 5, 10, 15, 20)
            }
        },
    "Family": 
        () => {
            let spots = 2;
            return {
                spots: spots,
                rating: 3
            }
        },
    "Retail Store": 
        (squareFootage) => {
            let spots = squareFootage * (1/250);
            return {
                spots: spots,
                rating: quickRate(spots, 10, 20, 30, 40)
            }
        },
    "Residential": 
        (squareFootage, occupants) => {
            let spots = (occupants/3) * 2;
            return {
                spots: spots,
                rating: quickRate(spots, 2, 3, 4, 5)
            }
        },
    "Commercial": 
        (squareFootage) => {
            let spots = squareFootage * (1/100);
            return {
                spots: spots,
                rating: quickRate(spots, 25, 50, 75, 100)
            }
        },
    "Office/Industrial": 
        (squareFootage) => {
            let spots = squareFootage * (1/500);
            return {
                spots: spots,
                rating: quickRate(spots, 4, 8, 12, 16)
            }
        },
    "Public": 
        (squareFootage) => {
            let spots = squareFootage * (1/250);
            return {
                spots: spots,
                rating: quickRate(spots, 10, 20, 30, 40)
            }
        },
    "Mixed Use": 
        (squareFootage) => {
            let spots = squareFootage * (1/100);
            return {
                spots: spots,
                rating: quickRate(spots, 25, 50, 75, 100)
            }
        },
    "Miscellaneous": 
        (squareFootage) => {
            let spots = squareFootage * (1/200);
            return {
                spots: spots,
                rating: quickRate(spots, 10, 20, 30, 40)
            }
        }
}

/**
 * Returns the estimated number of parking spaces required for the property type and size. a third variable, occupants, is required for residential units
 */
module.exports = function(type, squareFootage, occupants) {
    if (type in parkingRates) {
        return parkingRates[type](squareFootage, occupants);
    } else {
        return {
            spots: "Invalid Type",
            rating: -1
        }
    }
}

