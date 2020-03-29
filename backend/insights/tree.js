/**
 * Estimates the number of trees in a certain area
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
            resolve(trees);
        } catch (err) {
            resolve(0);
            console.log("Something went wrong");
            console.log(err);
        }
    })
}