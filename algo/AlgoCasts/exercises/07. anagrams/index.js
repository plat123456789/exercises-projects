// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// function anagrams(stringA, stringB) {
//     strA = stringA.replace(/[^\w]/g, "").toLowerCase()
//     strB = stringB.replace(/[^\w]/g, "").toLowerCase()

//     let objA = {};
//     let objB = {};

//     for (let char of strA) {
//         objA[char] ? objA[char]++ : objA[char] = 1
//     }

//     for (let char of strB) {
//         objB[char] ? objB[char]++ : objB[char] = 1
//     }

//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//         return false
//     }

//     for (let key in objA) {
//         if (objA[key] !== objB[key]) {
//             return false
//         }
//     }
//     return true;
// }


function anagrams(stringA, stringB) {
    strA = stringA.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");;
    strB = stringB.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");

    return strA === strB;
}

anagrams("hello", "llohe")



module.exports = anagrams;