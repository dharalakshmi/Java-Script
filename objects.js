let user = {
    name:"Dhara",
    age:20
};
console.log(user.name + " " + user.age);


function greet(student){
    console.log("Hello, "+student.name+" your age is "+student.age);
}

let student={
    name:"Dhara",
    age:20,
    gender:"F"
}
greet(student);

function greetuser(voter){
    console.log("Hey, "+voter.name+" your age is "+voter.age);
    if(voter.age){
        console.log("You are eligible to vote.");
    } else {
        console.log("You are not eligible to vote.");
    }
    
}
let voter={
    name:"Dhara",
    age:20,
}
greetuser(voter);

// function greetuser(people){
//     for(let i=0; i<people.length; i++){
//         console.log("Hello, "+people[i].name+" your age is "+people[i].age+" check eligibility for voting: "+people[i].isEligible);

//         if(people[i].isEligible){
//             console.log("You are eligible to vote.");
//         } else {
//             console.log("You are not eligible to vote.");
//         }
//     }
// }


