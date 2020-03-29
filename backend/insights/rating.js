module.exports = (trees, parkingData, pollution, transit, crimes, houseData) => {

    let ratings = [transit.rating, crimes.rating, trees.rating, houseData.rating, pollution.rating, parkingData.rating];

    let avg = 0, count = 0;
    for (let rating of ratings) {
        if (rating >= 0) {
            avg += rating;
            ++count;
        }
    }
    return avg / count;
}

