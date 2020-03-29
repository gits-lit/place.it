/**
 * Estimates the house value for a certain area
 */
module.exports = async function(lat, lng) {
    return new Promise(async (resolve, reject) => {
        debugger

        let getHouseData = new Promise((success, nosuccess) => {

            const { spawn } = require('child_process');

            let gmapKey = process.env.GOOGLE_MAPS_KEY;
            let estatedKey = process.env.ESTATED_KEY;

            const pyprog = spawn('python', ['./modules/houseValueApi/getHouseValue.py', gmapKey, estatedKey, lat, lng]);

            pyprog.stdout.on('data', function(data) {
                success(data);
            });
        
            pyprog.stderr.on('data', (data) => {
                nosuccess(data);
            });
        });
    
        try {
            let houseData = await getHouseData;
            houseData = JSON.parse(houseData.toString().split("'").join("\""));
            resolve(houseData);
        } catch (err) {
            reject({
                err: err
            });
        }
    })
}