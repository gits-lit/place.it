const getTreeData = require("../insights/tree");
const getTransitData = require("../insights/transit");
const getParkingData = require("../insights/parking");

exports.handle_get_insight = async (req, res) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const type = req.query.type;
    const radius = req.query.radius; // deprecated
    const width = req.query.width;
    const length = req.query.length;

    const squareFootage = req.query.squareFootage;
    const occupants = req.query.occupants;
    const height = req.query.height;
    
    
    try {
        let trees = await getTreeData(lat, lng, radius);
        let transit = await getTransitData(lat, lng);
        let parkingSpaces = getParkingData(type, squareFootage, occupants);

        res.status(200);
        res.json({
            rating: "A",
            jobs: -300,
            trees: parseInt(trees.toString()),
            carbon: 500,
            transit: transit,
            parkingSpaces: parkingSpaces
        });
    } catch(err) {
        res.status(500);
        res.json({
            error: err
        })
    }
}