function countVowels(str) {
    const vowels = str.toLowerCase().match(/[aeiou]/g);
    return vowels.length;
    
}

module.exports = countVowels;
