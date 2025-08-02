
console.log("Enter a number:");
const num = 5; // Example number, replace with user input if needed

if(num%2==0){
    console.log("Even");
}else{
    console.log("Odd");
}

console.log("The number is:", num);



function checkvote(age) {
    if (age < 18) {
        console.log("You are not eligible.");
    } else if (age >= 18) {
        console.log("You are eligible.");
    } else {
        console.log("please enter a valid age");
    }
}   
let meassage = checkvote(20);



function sum(a, b){
    return a + b;
}
console.log("The sum as prameters strings:", sum('5', '10')); // Outputs: The sum is: 510
console.log("The sum is:", sum(5, 10)); // Outputs: The sum is: 15


function loopsum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log("The sum of numbers from 0 to 5 is:", loopsum(5));

