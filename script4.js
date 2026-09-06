for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Task 2 — Reverse Number
console.log("Reverse Number");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// Task 3 — Even Numbers
console.log("Even Number");

for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
// Task 4 — Odd Numbers
console.log("Odd Number");

for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}
// Task 5 — Multiplication Table
console.log("Multiplication");

const number = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
  console.log(`${number} x ${i} = ${number * i}`);
}
// Task 6 — Countdown
console.log("Countdown");

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}
// Task 7 — Sum of Numbers
console.log("Sum of Number");

let a = 1;
let sum = 0;

while (a <= 10) {
  sum += a;
  a++;
}

console.log(sum);
// Task 8 — Print Numbers
let b = 1;

do {
  console.log(b);
  b++;
} while (b <= 5);
// Task 10 — String Characters
console.log("String Character");

let name = "javascript";

for (let char of name) {
  console.log(char);
}
// Task 11 — Array Values
console.log("Array ");

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Task 12 — Student Names
console.log("student Names");

let students = ["Arun", "Priya", "Rahul", "Anita", "Kiran"];

for (let student of students) {
  console.log(`Student: ${student}`);
}

let employee = {
  name: "Arun",
  age: 25,
  role: "Developer",
  city: "Chennai"
};
// Task 13 — Employee Object
console.log("Employee object");

for (let key in employee) {
  console.log(`${key} ${employee[key]}`);
}
// Task 14 — Product Object
console.log("Product Object:");

let product = {
  productName: "Laptop",
  price: 55000,
  brand: "Dell",
  category: "Electronics",
  stock: 15
};

for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}
// Task 15 — Simple Function
console.log("Function:");

function welcome() {
  console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();
// Task 16 — Function With Parameter
function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Naveen");
greet("Arun");
greet("Priya");
// Task 17 — Multiple Parameters
function student(name, age, department) {
  console.log(`Name: ${name}, Age: ${age}, Department: ${department}`);
}

student("Arun", 20, "Computer Science");
student("Priya", 21, "Electrical");
student("Rahul", 19, "Mechanical");

// Task 18 — Addition Function
console.log("Addition");

function add(a, b) {
  return a + b;
}

let result = add(70, 80);
console.log(result);

// Task 19 — Salary
function salary(amount) {
  return amount;
}
// Task 20 — Bonus Calculator
console.log("Bonus");

let monthlySalary = salary(60000);
console.log(monthlySalary);

function bonus(salary, bonusAmount) {
  return salary + bonusAmount;
}

let totalSalary = bonus(60000, 15000);
console.log(`Total = ${totalSalary}`);
// Default Parameter
//Task 21

function employee1(name, role = "Developer") {
  console.log(`Name: ${name}, Role: ${role}`);
}

employee1("Arun");
employee1("Priya", "Designer");

// Task 22 — Named Function
function square(number) {
  return number * number;
}

console.log(square(2));
console.log(square(5));
console.log(square(7));
console.log(square(10));
console.log(square(12));

// Task 23 — Anonymous Function
let calculate = function(a, b) {
  return a + b;
};

let result2 = calculate(15, 25);
console.log(result);

// Task 24 — Arrow Function
let multiply = (a, b) => {
  return a * b;
};


let result3 = multiply(6, 7);
console.log(result);


function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
       
    }

    console.log(a);
    console.log(b);
    
}

test();

var k;          

console.log(k); 

k = 10;


// Task 29 — Self Invoking Function
(function() {
  console.log("Welcome to JavaScript");
})();


(function(product, discount) {
  console.log(`The product '${product}' has a discount of ${discount}%.`);
})("Laptop", 10);
// Callback / Higher-Order Function
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);

// Task 31 — Cashback
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}


const offers = cashback();


for (const offer of offers) {
    console.log(offer);
}


// ----------------------------------------------------
// Employee Data Array
// ----------------------------------------------------
let employees = [
  {
    name: "Arun",
    age: 25,
    department: "IT",
    role: "Developer",
    salary: 40000
  },
  {
    name: "Priya",
    age: 24,
    department: "HR",
    role: "HR Executive",
    salary: 35000
  },
  {
    name: "Karthik",
    age: 28,
    department: "IT",
    role: "Lead Developer",
    salary: 60000
  }
];

// ----------------------------------------------------
// Requirement 3 & 4: Function with Parameters
// ----------------------------------------------------
function displayEmployee(emp) {
  console.log(`Employee: ${emp.name} | Role: ${emp.role} | Department: ${emp.department}`);
}

// ----------------------------------------------------
// Requirement 5: Function returning salary
// ----------------------------------------------------
function getSalary(emp) {
  return emp.salary;
}

// ----------------------------------------------------
// Requirement 7: Arrow Function (Simple Calculation)
// Calculate net annual salary with a standard 10% tax deduction
// ----------------------------------------------------
const calculateAnnualNet = (monthlySalary) => (monthlySalary * 12) * 0.9;

// ----------------------------------------------------
// Requirement 8: Generator for Benefits
// ----------------------------------------------------
function* getEmployeeBenefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}


// Task 32 — Employee Management Console
console.log("=== 1 & 4. Displaying Employees (for...of & Function Parameters) ===");

for (const emp of employees) {
  displayEmployee(emp);
}

console.log("\n=== 2. Employee Details Breakdown (for...in) ===");
// Requirement 2: for...in loop
for (const emp of employees) {
  console.log(`--- ${emp.name}'s Profile ---`);
  for (const key in emp) {
    console.log(`${key}: ${emp[key]}`);
  }
}

console.log("\n=== 5 & 6. High Earner Check (Return & Condition) ===");
// Requirement 5 & 6: Check if Salary >= 40000
for (const emp of employees) {
  let empSalary = getSalary(emp);
  
  if (empSalary >= 40000) {
    console.log(`${emp.name} earns high salary: ₹${empSalary}`);
  } else {
    console.log(`${emp.name} earns standard salary: ₹${empSalary}`);
  }
}

console.log("\n=== 7. Arrow Function Calculation ===");
for (const emp of employees) {
  let netAnnual = calculateAnnualNet(emp.salary);
  console.log(`${emp.name}'s estimated annual net income: ₹${netAnnual}`);
}

console.log("\n=== 8. Employee Benefits Generator ===");
const benefitsList = getEmployeeBenefits();
for (const benefit of benefitsList) {
  console.log(`- ${benefit}`);
}