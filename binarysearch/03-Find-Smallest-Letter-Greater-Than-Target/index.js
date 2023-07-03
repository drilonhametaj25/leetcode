/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const n = letters.length
    let [start, end] = [0, n - 1]
    while (start + 1 < end) {
        const mid = start + Math.floor((end - start) / 2)
        if (letters[mid] > target) {
            end = mid
        } else {
            start = mid
        }
    }
    if (letters[start] > target) {
        return letters[start]
    }
    if (letters[end] > target) {
        return letters[end]
    }
    return letters[0]
};