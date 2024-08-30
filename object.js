// const myName = "joseph";
// const myAge=18;
// console.log('my name is ' + myName + ' and my age is ' + myAge);

// console.log(myName);

// console.log(`my name is ${myName} and my age is ${myAge} `)


// function values( para1 , para2){
//    return para1 + para2;
// }
// console.log (values(20,20));

/*const name ="john";
const age ="30";
let isAdmin = 'true';

let numOne = 5;
let numTwo = 3;
console.log (numOne + numTwo);

let numThree=10;
let numFour=7;
console.log ( numThree - numFour );

let numFive = 4
let numSix = 9
console.log ( numFive * numSix );

let a = 20
let b = 4
console.log (a / b);

function great (name) {
    console.log('hello,'+ name);
}

function add ( para1, para2 ){
 return para1 + para2

}
console.log(add(40 , 40));

function isEven (number){
    return num % 2 === 0;
}

console.log(isEven(12)); output: true;
console.log(isEven(4)); output:false;

console.log(``)*/

/*const students = [
    { name: "Joseph", age: 23 },
    { name: "Isaac", age: 22 },
  ];
for (let i = 0; i < students.length; i++){
    console.log(students[i].name);
}*/

/*const students = [
    { name: "Joseph", age: 23 },
    { name: "Isaac", age: 12 },
    { name: "Benson", age: 57 },
    { name: "Hafsa", age: 43 },
    { name: "Priscilla", age: 100 },
    { name: "Daniella", age: 200 },
  ];
  
  for (let i = 0; i < students.length; i++) {
    const student = students[i] ;

    if (student.age > 50 ){
        console.log(student.name)
    }
       
    }
    */

    /*class Students {
        constructor(name , id , category ,price ) {
            this.name = name; 
            this.id =id; 
            this.category = category;  
            this.price= price; 
        }
    }

    const john = new Students ('tecno 12', 23 ,'phones', 350);

    console.log (john);

    class Phones{
        constructor(model, id, price){
            this.model= model
            this.id = id
            this.price =price
        }
        
    }
    const product =new Phones ("apple", 12,`$${12000}`);
    console.log(product);
    */

// class Human{
//     constructor(name , age){
//     this.name=name;
//     this.age =age;
//     }
//     talk(){
//         console.log (`${this.name}speaks`);
//     }
// }

//     const h1 = new Human('joe ');

//     console.log(h1.talk());

//     class Man extends Human{
//         constructor(name ,age){
//             super(name ,age)
//         }
//     }
//     const man = new Man('mark' ,20);
//     console.log(man. talk());




// const btn = document.querySelector('#btn');

// const img = document.querySelector('#img');

//  btn.addEventListener('click', function(){
//     console.log(img);
//     // alert('hello ');
//     img.src= "https://iom.vercel.app/images/image.png"

//     var image = document.getElementById("myImage");
//     var button = document.getElementById("toggleButton");

//     if (image.style.display === "none") {
//         image.style.display = "block";
//         button.textContent = "Hide Image";
//     } else {
//         image.style.display = "none";
//         button.textContent = "Show Image";
//     }

    
// }                                       
// );


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// console.log(Math.floor(Math.random() * hex.length));
function randomHex() {
  return Math.floor(Math.random() * hex.length);
}
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // hexColor += hex[randomHex()];
    hexColor = hexColor + hex[randomHex()];
  }
  console.log(hexColor);
  document.body.style.backgroundColor = hexColor;
})




  
    