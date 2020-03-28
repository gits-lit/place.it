module.exports = async function(lat, lng, radius) {
    return new Promise(async (resolve, reject) => {
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
            console.log(trees.toString())
            trees = parseInt(trees.toString());
            resolve(trees);
        } catch (err) {
            reject(`${err}`);
        }
    })
}