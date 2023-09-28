function reverseString(str) {
    let reverse='';
    for (let i=str.length-1; i>=0; i--){
        reverse += str[i];
    }
    return reverse;
}

/* function isPalindrome(str) {
    NO METHOD TO REVERSE A STRING, BUT CAN REVERSE ARRAY
    return str.split('').reverse().join('');
}*/


module.exports = reverseString;
