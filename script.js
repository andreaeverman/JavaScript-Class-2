// if  
// if-else
// if-ifelse-else
// for 
// do/while 
// while 



var boxes = document.querySelectorAll(".box");
// console.log(boxes);


//     if (boxes.length >= 4) {
//     console.log("We have more than 4 boxes");
//     }



//    if (boxes.length > 4) {
//    console.log("we have more than 4 boxes");
//    } else {
//    console.log("We have less than or equal to 4 boxes");
//    }


//    switch (boxes.length) {
//    case 1:
//        console.log("We have 1 box.");
//        break;

//    case 2: 
//        console.log("We have 2 boxes.");
//        break;

//    default:
//        console.log("This is default.");
//        break;
//     }

var name = "Ali Karbassi";

console.log(name.length);

var fruits = [
    "orange",
    "durian",
    "banana",
    "pineapple",
];

// get banana=
console.log(fruits.length);
console.log(fruits[2]);

// length of the word for third fruit?=
console.log(fruits[2].length);



var daysInYear = 365.25;

console.log(daysInYear);

// the triple equals is "make sure this is a string"
if(fruits[2] === "banana") {
    document.body.style.backgroundColor = "yellow";

}
// here is a loop example
for (var i = 0; i < 100; i++) {
    console.log(i);
}
