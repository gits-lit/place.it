const getTreeData = require("../insights/tree");
const getTransitData = require("../insights/transit");
const getParkingData = require("../insights/parking");
const getCrimes = require("../insights/crime");
const getHouseData = require("../insights/house");
const getPollution = require("../insights/pollution");
const calculateRating = require("../insights/rating");

const dummyData = {
    "transit": {
        "rating": 2,
        "walk": {
          "score": 51,
          "description": "Somewhat Walkable",
          "rating": 2
        },
        "transit": {
          "score": 55,
          "description": "Good Transit",
          "summary": "5 nearby routes: 5 bus, 0 rail, 0 other",
          "rating": 2
        },
        "bike": {
          "score": 41,
          "description": "Somewhat Bikeable",
          "rating": 2
        },
        "detailLink": "https://www.walkscore.com/score/loc/lat=34.0791772265245/lng=-118.406784658529/?utm_source=ronakshah.net&utm_medium=ws_api&utm_campaign=ws_api"
      },
    crimes: {
        crimes: 4,
        rating: 4
    },
    houseData: {
        taxes: 57614,
        land_value: 3876115,
        rating: 4
    }
}


exports.handle_get_insight = async (req, res) => {

    const parameters = {
        lat : req.query.lat,
        lng : req.query.lng,
        type : req.query.type,
        width : req.query.width,
        length : req.query.length,
        useApis : req.query.useApis,

        squareFootage : req.query.squareFootage,
        occupants : req.query.occupants,
        height : req.query.height,
    }

    let errors = []
    for (let param in parameters) {
        if (parameters[param] == undefined) {
            errors.push(`${param} was not specified\n`)
        }
    }
    
    if (errors.length != 0) {
        res.status(422);
        res.json(errors);
        res.end();
    } else {
        
        try {
            let trees = await getTreeData(parameters.lat, parameters.lng, parameters.width, parameters.length);
            let parkingSpaces = getParkingData(parameters.type, parameters.squareFootage, parameters.occupants);
            let pollution = getPollution(parameters.squareFootage);
            let transit = (parameters.useApis == 1) ? await getTransitData(parameters.lat, parameters.lng) : dummyData.transit;
            let crimes = (parameters.useApis == 1) ? await getCrimes(parameters.lat, parameters.lng) : dummyData.crimes;
            let houseData = (parameters.useApis == 1) ? await getHouseData(parameters.lat, parameters.lng) : dummyData.houseData;
            let rating = calculateRating(trees, parkingSpaces, pollution, transit, crimes, houseData);

            res.status(200);
            res.json({
                rating: rating,
                trees: trees,
                carbon: pollution,
                transit: transit,
                parkingSpaces: parkingSpaces,
                crimes: crimes,
                house: houseData,
                dummyData: parameters.useApis != 1
            });
        } catch(err) {
            console.log(err)
            res.status(500);
            res.json({
                error: err
            })
        }
    }
}