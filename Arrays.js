//Arrays

const users=["Dhara", "Rohit", "Shabya", "Amit"];
console.log(users[0]); // Dhara

totalusers=users.length;
console.log("Total users: " + totalusers); // Total users: 4
console.log("---------------------------------------------------------------------")

console.log("The list of users selected for an company are :");
for(let i=0; i<users.length; i++){
    console.log(users[i]);
}
console.log("---------------------------------------------------------------------")

const people=["Dhara", "Bob", "shayam", "ABC", "Rohit", "Shabya", "Amit"];
console.log("The list of people selected for an company with odd skills:");
for(let i=0; i<people.length; i++){
    if(people[i].length % 2 != 0){
        console.log(people[i]);
    }
}

console.log("---------------------------------------------------------------------")
//Array of objects
const usersDetails = [
    { name: "Dhara", age: 25, city: "Mumbai" },
    { name: "Rohit", age: 30, city: "Delhi" },
    { name: "Shabya", age: 28, city: "Bangalore" },
    { name: "Amit", age: 22, city: "Chennai" }
];
const usersDetails1_name = usersDetails[0].name
console.log(usersDetails1_name); // Dhara


let members=[
    { name: "Dhara", age: 25, gender: "Female"},
    { name: "Rohit", age: 27, gender: "Male"},
    { name: "Rani", age: 12, gender: "Female"}
];

console.log("-------------------------------------------------------------------------")
console.log("The list of members who can vote or not");
for(let i=0; i<members.length; i++){
    console.log("Name: " + members[i].name + ", Age: " + members[i].age);
    if(members[i].age >= 18){
        console.log("eligible");
    } else{
        console.log("not eligible");
    }
}

console.log("---------------------------------------------------------------------")

let abc = [
  {
    name: "Bharat",
    age: 21,
    gender: "male",
  },
  {
    name: "Priya",
    age: 22,
    gender: "female",
  },
  {
    name: "Rani",
    age: 15,
    gender: "female",
  },
  {
    name: "Deepak",
    age: 24,
    gender: "male",
  },
  {
    name: "Rahul",
    age: 17,
    gender: "male",
  },
];

function getEligibleUsers(abc) {
  let ans = [];

  for (let i = 0; i < abc.length; i++) {
    if (abc[i].age > 18 && abc[i].gender === "male") {
      ans.push(abc[i]);
    }
  }

  return ans;
}

let allUsers = getEligibleUsers(abc);
console.log(allUsers); 

console.log("---------------------------------------------------------------------")

// object of objects

const personalDetails = {
    name: "Dhara",
    age: 25,
    address:{
        city: "Kakinada",
        state: "AP",
        country: "India"
    }
};
const DharaCity = personalDetails.address.city;
console.log(DharaCity); 
