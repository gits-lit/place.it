module.exports = (trees, parkingData, pollution, transit, crimes, houseData) => {

    let ratings = [transit.rating, crimes.rating, trees.rating, houseData.rating, pollution.rating, parkingData.rating];

    let avg = 0, count = 0, tips = [];
    for (let rating of ratings) {
        if (rating >= 0) {
            avg += rating;
            ++count;
        }
    }

    if (transit.transit.rating >= 0) {
        if (transit.transit.rating < 3) {
            tips.push("Try building in an area with better public transportation");
        } else {
            tips.push("Excellent! Your building is in a good transit zone!");
        }
    }

    if (trees.rating >= 0) {
        if (trees.rating < 3) {
            tips.push("Try reducing plot built on tree dense areas");
        } else {
            tips.push("Awesome! Good placing your building to avoid hitting trees!")
        }
    }

    if (pollution.rating >= 0) {
        if (pollution.rating < 3) {
            tips.push("Your building's carbon footprint is high");
        } else {
            tips.push("Great job! Your building has a relatively low carbon footprint")
        }
    }
    
    return {
        rating: avg / count,
        tips: tips
    };
}

