function titleCase(str) {
    const words = str.toLowerCase().split(' ');
    for (let i=0; i<words.length; i++){
        //Select word in loop, 1st letter to uppercase, add back to the rest of the word (minus 1st letter)
        words[i] = words[i][0].toUpperCase()+ words[i].slice(1);
        }
    return words.join(' ');
    }


module.exports = titleCase;
