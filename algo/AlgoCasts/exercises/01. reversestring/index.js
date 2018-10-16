// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// function reverse(str) {
//     let strArry = str.split("");
//     strArry.reverse()
//     return resultString;
// }


// function reverse(str) {
//     let resultString = "";

//     for (let character of str) {
//         resultString = character + resultString
//     }

//     return resultString;
// }

function reverse(str) {
    return strArry = str.split("").reduce((reversed, character) =>
        character + reversed, "");
}


module.exports = reverse;
