// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const chars = {}
    let max = 0;
    let maxChar = ""

    for (let character of str) {
        chars[character] = chars[character] + 1 || 1;
    }

    for (let key in chars) {
        if (chars[key] > max) {
            max = chars[key];
            maxChar = key;
        }
    }

    return maxChar;
}

maxChar("Hello World!")

module.exports = maxChar;