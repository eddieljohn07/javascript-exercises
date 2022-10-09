const reverseString = function(_reversedString) {
    let string = '';
    let stringArray = string.split("");
    let backward = stringArray.reverse();
    _reversedString = backward.join('')
    return _reversedString
}
console.log(reverseString());
// Do not edit below this line
module.exports = reverseString; 
