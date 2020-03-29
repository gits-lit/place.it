const quickRate = require("../utils/rating").quickRateSmaller;

/**
 * Estimates the number of trees in a certain area
 * Data from http://lahubcom.maps.arcgis.com/home/item.html?id=3ac3c0dc510a4581bb7f2c879f15ede5
 */
module.exports = async function(lat, lng, width, length) {
    return new Promise(async (resolve, reject) => {
        let getTreeData = new Promise((success, nosuccess) => {

            const { spawn } = require('child_process');
            const pyprog = spawn('python', ['./modules/treeApi/treeFind.py', lat, lng, length, width]);
        
            pyprog.stdout.on('data', function(data) {
                success(data);
            });
        
            pyprog.stderr.on('data', (data) => {
                nosuccess(data);
            });
        });
    
        try {
            let trees = await getTreeData;
            trees = parseInt(trees.toString());
            resolve({
                trees: trees,
                rating: quickRate(trees, 4, 17, 30, 67)
            });
        } catch (err) {
            resolve({
                trees: -1,
                rating: -1
            });
            console.log("Something went wrong");
            console.log(err.toString());
        }
    })
}