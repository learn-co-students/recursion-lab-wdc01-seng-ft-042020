// Code your solution here!

function printString(string) {
    console.log(string[0]);
    if (string.length > 1) {
        let substring = string.substring(1, string.length);
        printString(substring);
    } else {
        return true;
    }
}
// printString("p");

function reverseString(string) {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}
// console.log(reverseString("hello"));

function isPalindrome(string) {
    if (string.length < 2) return true;
    if (string[string.length - 1] === string[0]) {
        return isPalindrome(string.slice(1, string.length - 1));
    } 
    return false;
    
}
// console.log(isPalindrome('mad'))

function addUpTo(array, index) {
    return index ? array[index] + addUpTo(array, --index) : array[index];
}

// console.log(addUpTo([2, 3, 1], 1))

function maxOf(array) {
    if(array.length === 1) return array[0];
    return Math.max(array.pop(), maxOf(array));
}
console.log(maxOf([1, 300, 5, 100, 32342, -100]))

function includesNumber(array, element) {
    if(array.length === 0) return false;
    if(array[0] === element) return true;
    return includesNumber(array.slice(1), element);
}

console.log(includesNumber([3, 5, 5], 5))