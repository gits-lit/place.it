const getTreeData = require("../insights/tree");
const getTransitData = require("../insights/transit");
const getParkingData = require("../insights/parking");
const getCrimes = require("../insights/crime");
const getHouseData = require("../insights/house");

exports.handle_get_insight = async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const type = req.query.type;
    const radius = req.query.radius; // deprecated
    const width = req.query.width;
    const length = req.query.length;
    const useApis = req.query.useApis;

    const squareFootage = req.query.squareFootage;
    const occupants = req.query.occupants;
    const height = req.query.height;
    
    
    try {
        let trees = await getTreeData(lat, lng, radius);
        let parkingSpaces = getParkingData(type, squareFootage, occupants);

        let transit = (useApis == 1) ? await getTransitData(lat, lng) : "APIs Not Enabled to Preserve Calls";
        let crimes = (useApis == 1) ? await getCrimes(lat, lng) : "APIs Not Enabled to Preserve Calls";
        let houseData = (useApis == 0) ? await getHouseData(lat, lng) : "APIs Not Enabled to Preserve Calls";
        console.log(crimes)

        res.status(200);
        res.json({
            rating: "A",
            jobs: -300,
            trees: parseInt(trees.toString()),
            carbon: 500,
            transit: transit,
            parkingSpaces: parkingSpaces,
            crimes: crimes,
            house: houseData
        });
    } catch(err) {
        res.status(500);
        res.json({
            error: err
        })
    }
}