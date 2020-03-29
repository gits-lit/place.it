const parkingRates = {
    "Office Building": 
        (squareFootage) => {
            return squareFootage * (1/400);
        },
    "Family": 
        (squareFootage) => {
            return 2;
        },
    "Retail Store": 
        (squareFootage) => {
            return squareFootage * (1/250);
        },
    "Residential": 
        (squareFootage, occupants) => {
            return (occupants/3) * 2;
        },
    "Commercial": 
        (squareFootage) => {
            return squareFootage * (1/100);
        },
    "Office/Industrial": 
        (squareFootage) => {
            return squareFootage * (1/500);
        },
    "Public": 
        (squareFootage) => {
            return squareFootage * (1/250);
        },
    "Mixed Use": 
        (squareFootage) => {
            return squareFootage * (1/100);
        },
    "Miscellaneous": 
        (squareFootage) => {
            return squareFootage * (1/200);
        }
}

/**
 * Returns the estimated number of parking spaces required for the property type and size. a third variable, occupants, is required for residential units
 */
module.exports = function(type, squareFootage, occupants) {
    if (type in parkingRates) {
        return parkingRates[type](squareFootage, occupants);
    } else {
        return "Invalid Type";
    }
}