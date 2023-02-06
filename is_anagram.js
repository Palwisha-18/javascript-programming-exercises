// Given two strings, return true if they are anagrams of one another

let firstWord = "Sneak";
let secondWord = "Snake";

console.log(isAnagram(firstWord, secondWord));

function isAnagram(firstWord, secondWord) {
    // For case insensitivity, change both words to lowercase.
    // Sort the strings, and join the resulting array to a string. Compare the results
    let a = firstWord.toLowerCase();
    let b = secondWord.toLowerCase();
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    return a === b;
}