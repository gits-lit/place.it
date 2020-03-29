const async = require("async");

module.exports = (functions) => {
    return new Promise((resolve, reject) => {
        async.parallel(functions, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        })
    })
}