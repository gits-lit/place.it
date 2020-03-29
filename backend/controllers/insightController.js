const getTreeData = require("../insights/tree");
const getTransitData = require("../insights/transit");
const getParkingData = require("../insights/parking");
const getCrimes = require("../insights/crime");
const getHouseData = require("../insights/house");

const dummyData = {
    transit: {
        walk: {
        score: 44,
        description: "Car-Dependent"
        },
        transit: {
        score: 56,
        description: "Good Transit",
        summary: "19 nearby routes: 19 bus, 0 rail, 0 other"
        },
        bike: {
        score: 46,
        description: "Somewhat Bikeable"
        },
        detailLink: "https://www.walkscore.com/score/loc/lat=34.068972/lng=-118.456386/?utm_source=ronakshah.net&utm_medium=ws_api&utm_campaign=ws_api"
    },
    crimes: 4,
    houseData: {
        taxes: 3273,
        land_value: 87672
    }
}


exports.handle_get_insight = async (req, res) => {

    const parameters = {
        lat : req.query.lat,
        lng : req.query.lng,
        type : req.query.type,
        radius : req.query.radius,
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
    }
    
    try {
        let trees = await getTreeData(parameters.lat, parameters.lng, parameters.radius);
        let parkingSpaces = getParkingData(parameters.type, parameters.squareFootage, parameters.occupants);

        let transit = (parameters.useApis == 1) ? await getTransitData(parameters.lat, parameters.lng) : dummyData.transit;
        let crimes = (parameters.useApis == 1) ? await getCrimes(parameters.lat, parameters.lng) : dummyData.crimes;
        let houseData = (parameters.useApis == 1) ? await getHouseData(parameters.lat, parameters.lng) : dummyData.houseData;

        res.status(200);
        res.json({
            rating: "A",
            trees: trees,
            carbon: 500,
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