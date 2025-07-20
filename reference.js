
/*
// Reverse String 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // Output: "olleh"
*/
//----------------------------------------------------------------------------------------------
/*
// Check if a string is a palindrome
function ispalindrome(str) {
    let str1 = str.split('').reverse().join('');
    return (str == str1) ? "Yes" : "No";
}
console.log(ispalindrome("madam")); // Output: "Yes"
console.log(ispalindrome("hello")); // Output: "No"
*/
/*------------------------------------------------------------------------------------------------
// Check if a string is a palindrome ignoring case
function isPalindromeIgnoreCase(str) {  
    let lowerStr = str.toLowerCase();
    let reversedStr = lowerStr.split('').reverse().join('');
    return (lowerStr === reversedStr) ? "Yes" : "No";
}   
console.log(isPalindromeIgnoreCase("Madam")); // Output: "Yes"
console.log(isPalindromeIgnoreCase("Hello")); // Output: "No"

// Check if a string is a palindrome ignoring spaces and punctuation
function isPalindromeIgnoreSpacesAndPunctuation(str) {
    let cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');
    let reversedStr = cleanedStr.split('').reverse().join('');
    return (cleanedStr === reversedStr) ? "Yes" : "No";
}           
console.log(isPalindromeIgnoreSpacesAndPunctuation("M ah-usgin a h u s g i n a m")); // Output: "Yes"
console.log(isPalindromeIgnoreSpacesAndPunctuation("Hello, World!")); // Output: "No"
*/

/*----------------------------------------------------------------------------------------------
function ispalindrome(num){
    let num1=num.split('').reverse().join('');
    return (num == num1) ? "Yes" : "No";
}
console.log(ispalindrome("12321")); // Output: "Yes"
console.log(ispalindrome("12345")); // Output: "No"
*/

//----------------------------------------------------------------------------------------------
function fibseries(n){
    series=[0,1];
    for(let i=2; i<n; i++) {
        series[i]=series.push(series[i-1]+series[i-2]);
    }
    return series.slice(0, n);
}
let n = 10;
console.log("Fibonacci series of " + n + " terms: " + fibseries(n)); // Output: Fibonacci series of 10 terms: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] 
