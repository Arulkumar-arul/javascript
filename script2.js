var name = "Arul";
let Age = 25;
const collegeName = "Arts collage";


console.log("Name:", name);
console.log("Age:", Age);
console.log("College:", collegeName);

// 2. Changing (Reassigning) Values
name = "kumar";
age = 21;

console.log("\n--- Updated Values ---");
console.log("Updated Name:", name);
console.log("Updated Age:", Age);

// 3. Redeclaring 'var' (Allowed)
var name = "Taylor Swift";
console.log("Redeclared var Name:", name);
console.error(200);


//  Task 2 — User Information
var Name = prompt("What is your name");
var age = prompt("what is your age");
var city = prompt("What is your city")

console.log("Name:", Name);
console.log("Age:", age);
console.log("City :", city);

// Task 3 — Welcome Message

var Name1 = prompt("What is your name");
alert("welcome "+ Name1+ "!");

// Task 4 — Age Calculator
let brithyear = prompt("what is your year");
let currentyear = 2026
let Calculatorage = currentyear-Number(brithyear);
console.log("current My Age:",Calculatorage);

//Task 5 — Identify Data Types

let mess ="hello"
console.log(typeof(mess),mess);
let num3 = 200
console.log(typeof(num3),num3);
let num2 = 25.56
console.log(typeof(num2), num2);
let bool = true
console.log(typeof(bool),bool);
let bool2 = false
console.log(typeof(bool2),bool2);
let empty;
console.log(empty);
let random = prompt()

    console.log(random);

// // Task 6 — Student Data

  let student ={
  Name : prompt("name"),
   Age : prompt("age"),
     city : prompt("city"),
     qualification : prompt("qualification"),
   isstudent : prompt("isstudent"),
  }
 console.log(student);
 console.log(student.Name);
 console.log(student.Age);
 console.log(student.city);
 console.log(student.qualification);
 console.log(student.isstudent);

// Task 7 — Fruit Array



let furite =["Apple","Mango","Orange","Banana","Grapes","Papaya"]
console.log(furite[0]);
console.log(furite[1]);
console.log(furite[furite.length-1]);
console.log(furite.length);

// Task 8 — Basic Calculato

let a=30;
let b= 3;
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
console.log("Division:",a/b);
console.log("Exponentiation:",a**b);
console.log("Modulus:",a%b);

// Task 9 — Shopping Bill
let shart = 999;
let pant = 1589;
let shoes = 2498;
let total = shart+pant+shoes
console.log("Total Price:",total);

// Task 10 — Simple Marks Calculation

let tamil = 99;
let english = 65;
let maths = 91;
let science = 98;

let Total = tamil+english+maths+science
let average = Total/4
console.log("Total Mark",Total);
console.log("Average",average);

// Task 11 — Post Increment

let c = 12;
let d = c++;
console.log(c);
console.log("Post Increment:",d);

// Pre Increment
let q=17;
let r=++q;
console.log(q);
console.log("Pre Increment:",r);

// Task 13 — Post Decrement
let e=19;
let f=e--;
console.log(e);
console.log("Post Decrement:",f);

// Task 14 — Pre Decrement

let t=58;
let s=--t;
console.log(t);
console.log("Pre Decrement",s);

// Task 15 — Find the Final Values

let z= 50;
let x=z++;
let y=++z;
let w=x--;
console.log(z);
console.log(x);
console.log(y);
console.log(w);

// Task 16 — Assignment Operators
console.log("Assignment Operators");

let num = 20;
num += 6
console.log(num);
num -=7
console.log(num);
num *= 8
console.log(num);
num /= 2
console.log(num);
num %= 3
console.log(num);
num **= 5
console.log(num);

// Task 17 — Mini Student ProfileStudent name


let studentname = "Kumr";
let studentage = 25;
let studentcity = "dharmapuri";
let studentcollage = "Arts collage";
let subject=["Tamil","Engalish","Maths","Science","Social"]
let studentobject={
    Name: studentname,
    Age: studentage,
    City: studentcity,
    Subject: subject,
    isStudent: true
};

console.log("Student Name:",studentobject.Name);
console.log("Student Age:",studentobject.Age);
console.log("Student City:",studentobject.City);
console.log("Student First Subject:",studentobject.Subject[0]);
console.log("Student Last Subject:",studentobject.Subject[subject.length-1]);
console.log("Student Total Subject:",studentobject.Subject.length);
console.log("Student Complete Object:",studentobject);

// Final Challenge — User + Calculator
let number1= prompt("one number");
let number2= prompt("onether number");
console.log("Addition:",number1+number2);
console.log("Subtraction:",number1-number2);
console.log("Multiplication:",number1*number2);
console.log("Division:",number1/number2);
console.log("Exponentiation:",number1**number2);
console.log("Modulus:",number1%number2);





















 



