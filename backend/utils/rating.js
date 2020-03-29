/**
 * Use if your scale means that the larger value is, the higher rating it gets
 */
module.exports.quickRateLarger = (value, aMin, bMin, cMin, dMin) => {
    if (value < dMin) {
        return 0; // F
    } else if (value < cMin) {
        return 1; // D
    } else if (value < bMin) {
        return 2; // C
    } else if (value < aMin) {
        return 3; // B
    } else {
        return 4; // A
    }
}

/**
 * Use if your scale means that the smaller value is, the higher rating it gets
 */
module.exports.quickRateSmaller = (value, aMin, bMin, cMin, dMin) => {
    if (value > dMin) {
        return 0; // F
    } else if (value > cMin) {
        return 1; // D
    } else if (value > bMin) {
        return 2; // C
    } else if (value > aMin) {
        return 3; // B
    } else {
        return 4; // A
    }
}