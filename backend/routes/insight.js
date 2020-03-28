const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
    const lat = req.query.lat;
    const lng = req.query.lng;
    const type = req.query.type;
    const radius = req.query.radius;
    const squareFootage = req.query.squareFootage;
    const occupancy = req.query.occupancy;
    const height = req.query.height;

    let getTreeData = new Promise((success, nosuccess) => {

        const { spawn } = require('child_process');
        const pyprog = spawn('python', ['./modules/treeApi/treeFind.py', lat, lng, radius]);
    
        pyprog.stdout.on('data', function(data) {
    
            success(data);
        });
    
        pyprog.stderr.on('data', (data) => {
    
            nosuccess(data);
        });
    });

    try {
        let trees = await getTreeData;

        res.status(200);
        res.json({
            rating: "A",
            jobs: -300,
            trees: parseInt(trees.toString()),
            carbon: 500
        });
    } catch(err) {
        res.status(500);
        res.json({
            error: err
        })
    }
});

module.exports = router;