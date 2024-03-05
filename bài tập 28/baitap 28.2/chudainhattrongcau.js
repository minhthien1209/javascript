function findLongestWord(sentence) {

    const words = sentence.split(" ");


    if (words.length === 0) {
        return "";
    }

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}


const sentence = "";
const longest = findLongestWord(sentence);
console.log(longest);
