
var name = "Arun";
let age = 22;
const city = "Chennai";
const college = "Anna University";

console.log("--- Initial Values ---");
console.log(name, age, city, college);



name = "Priya"; 
age = 23;      


console.log("Updated Name:", name);
console.log("Updated Age:", age);

var name = "Karthik"; 



console.log("Name:", name);

console.log("Welcome to JavaScript debugging!");

// Task 2 — Printing Statements
alert("Hello! This is a simple notification alert.");   
let isUserReady = confirm("Are you ready to continue?");
console.log("User clicked OK?", isUserReady);
let username = prompt("Please enter your name:", "Guest");
console.log("Username entered:", username);
document.writeln("<h3>Hello, " + (username || "Guest") + "! Welcome to the site.</h3>");
document.writeln("<p>This text was added using document.writeln().</p>");


let name1 = prompt("Enter your Name:");
let age1 = prompt("Enter your Age:");
let city1 = prompt("Enter your City:");
let qualification = prompt("Enter your Qualification:");

console.log("=== User Details ===");
console.log(`Name: ${name1}`);
console.log(`Age: ${age1}`);
console.log(`City: ${city1}`);
console.log(`Qualification: ${qualification}`);

// Task 4 — Find Data Types
let language = "JavaScript";
let integerNum = 100;
let floatNum = 99.5;
let isCodingFun = true;
let isBugFree = false;
let emptyValue;
let emptyObject = null;


console.log(`Value: ${language} | Type: ${typeof language}`);
console.log(`Value: ${integerNum} | Type: ${typeof integerNum}`);
console.log(`Value: ${floatNum} | Type: ${typeof floatNum}`);
console.log(`Value: ${isCodingFun} | Type: ${typeof isCodingFun}`);
console.log(`Value: ${isBugFree} | Type: ${typeof isBugFree}`);
console.log(`Value: ${emptyValue} | Type: ${typeof emptyValue}`);
console.log(`Value: ${emptyObject} | Type: ${typeof emptyObject}`);

// Task 5 — Student Array
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

console.log("First student:", students[0]);

console.log("Second student:", students[1]);

console.log("Last student:", students[students.length - 1]);

console.log("Total students:", students.length);

// Task 6 — Employee Object

let employee = {
  name: "Arun",
  age: 26,
  role: "Full Stack Developer",
  skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  isWorking: true,
  qualification: ["B.Sc Computer Science", "M.Sc Information Technology"]
};


console.log("Employee name:", employee.name);
console.log("Age:", employee.age);
console.log("Role:", employee.role);
console.log("First skill:", employee.skills[0]);
console.log("Last qualification:", employee.qualification[employee.qualification.length - 1]);
console.log("Working status:", employee.isWorking);

// Task 7 — Calculator
let a = 20;
let b = 5;

let addition = a + b;
let subtraction = a - b;
let multiplication = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;

console.log("Addition :", addition);
console.log("Subtraction :", subtraction);
console.log("Multiplication :", multiplication);
console.log("Division :", division);
console.log("Modulus :", modulus);
console.log("Exponentiation (:", exponentiation);

// Task 8 — Shopping Bill
let shirt = 999;
let pant = 1499;
let shoes = 1999;
let bag = 799;

let totalPrice = shirt + pant + shoes + bag;

console.log("Shirt Price:", shirt);
console.log("Pant Price:", pant);
console.log("Shoes Price:", shoes);
console.log("Bag Price:", bag);
console.log("Total Price:", totalPrice);

// Assignment Operator Tasks
let num = 10;

num += 5;
console.log("After num += 5:", num);

num -= 3;
console.log("After num -= 3:", num);

num *= 2;
console.log("After num *= 2:", num);

num /= 4;
console.log("After num /= 4:", num);

num %= 3;
console.log("After num %= 3:", num);

num **= 2;
console.log("After num **= 2:", num);

// Task 11 — Find Output
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(10 <= 9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");
// Task 12 — AND
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
// Task 13 — OR
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
//Task 14 — NOT
console.log(!true);
console.log(!false);
console.log(!(5 > 10));
console.log(!(10 > 5));
// Task 15 — Combination
console.log(5 == "5" && !(5 === 5) || 6 > 7);

console.log(10 > 5 && 8 < 12 || 4 === "4");

console.log(7 === 7 && 10 != "10" || 5 >= 5);

console.log(15 < 10 || 20 > 15 && 5 == "5");

// Task 16 — Voting
let age3 = 20;

let result3 = age3 >= 18 ? "Eligible to vote" : "Not eligible";

console.log(result3);

// Task 17 — Password
let password = true;

let result = password ? "Login successful" : "Wrong password";

console.log(result);

let name4 = "Naveen";
let age4 = 25;
let city4 = "Trichy";


let result4 = "My name is " + name4 + ". I am " + age4 + " years old. I live in " + city4 + ".";
console.log("Using +:", result4);


let result5 = `My name is ${name4}. I am ${age4} years old. I live in ${city4}.`;
console.log("Using template literals:", result5);


// Task 19 — String Conversion
let numStr = String(100);
let boolStr = String(true);
let undefStr = String(undefined);
let nullStr = String(null);
let arrayStr = String([1, 2]);

console.log(`Value: "${numStr}" | Type: ${typeof numStr}`);
console.log(`Value: "${boolStr}" | Type: ${typeof boolStr}`);
console.log(`Value: "${undefStr}" | Type: ${typeof undefStr}`);
console.log(`Value: "${nullStr}" | Type: ${typeof nullStr}`);
console.log(`Value: "${arrayStr}" | Type: ${typeof arrayStr}`);

// Task 20 — Number Conversion
console.log(Number());
console.log(Number(""));
console.log(Number("123"));
console.log(Number("a1"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));

// Task 21 — Boolean Conversion
console.log(Boolean());
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean(123));
console.log(Boolean(true));
console.log(Boolean(false));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));



// Task 22 — Voting Eligibility
let age6 = prompt("Enter your age:");


age6 = Number(age6);

if (age6 >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}



// Task 23 — Positive or Negative
let userInput = prompt("Enter a number:");


let num1 = Number(userInput);


if (num > 0) {
  console.log(`${num1} is Positive`);
} else if (num1 < 0) {
  console.log(`${num1} is Negative`);
} else if (num1 === 0) {
  console.log("The number is Zero");
} else {
  console.log("Invalid input! Please enter a valid number.");
}



// Task 24 — Grade System
let userInput1 = prompt("Enter your mark (0-100):");

// 2. Convert input to a number
let mark = Number(userInput1);


if (mark >= 90 && mark <= 100) {
  console.log("A Grade");
} else if (mark >= 80 && mark <= 89) {
  console.log("B Grade");
} else if (mark >= 70 && mark <= 79) {
  console.log("C Grade");
} else if (mark >= 60 && mark <= 69) {
  console.log("D Grade");
} else if (mark >= 0 && mark < 60) {
  console.log("Fail");
} else {
  console.log("Invalid mark! Please enter a number between 0 and 100.");
}


// Task 25 — Job Eligibility
let age22 = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height (in cm):"));
let weight = Number(prompt("Enter your weight (in kg):"));


if (age22 >= 18) {
  if (height >= 160) {
    if (weight >= 60) {
      console.log("Congratulations! You are selected");
    } else {
      console.log("Rejected: Weight must be at least 60 kg");
    }
  } else {
    console.log("Rejected: Height must be at least 160 cm");
  }
} else {
  console.log("Rejected: Age must be at least 18");
}

// Task 26 — Traffic Light
let color = prompt("Enter traffic light color (red, yellow, green):");

switch (color ? color.toLowerCase().trim() : "") {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color!");
}


// Task 27 — Day
let day = prompt("Enter the Number:");

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}



let name11 = prompt("Enter your name:");
let age11 = Number(prompt("Enter your age:"));
let city11 = prompt("Enter your city:");


let tamil = Number(prompt("Enter Tamil mark:"));
let english = Number(prompt("Enter English mark:"));
let maths = Number(prompt("Enter Maths mark:"));

let total = tamil + english + maths;
let average = total / 3;


let grade;
if (average >= 90) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else {
  grade = "Fail";
}


let voting = age11 >= 18 ? "Eligible" : "Not Eligible";


let summary = `
Name: ${name11}
Age: ${age11}
City: ${city11}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${voting}
`;

console.log(summary);