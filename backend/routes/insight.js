const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
    const lat = req.params.lat;
    const lng = req.params.lng;
    const type = req.params.type;
    const radius = req.params.radius;
    const squareFootage = req.params.squareFootage;
    const occupancy = req.params.occupancy;
    const height = req.params.height;

    res.status(200);
    res.json({
        rating: "A",
        jobs: -300,
        trees: -50,
        carbon: 500
    });
});

module.exports = router;