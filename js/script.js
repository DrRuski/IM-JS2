


// Module 2 - 2.1

//Lesson Task 1
/*
const receivingFunction = function(checkArgument){
    if (typeof checkArgument === "function"){
        callbackFunction();
    }
}

const callbackFunction = function(){
    console.log("I am a callback function");
}

receivingFunction(callbackFunction);



// Lesson Task 2

const prizes = ["Bag of bananas", "Box of frogs", "Car of clowns"];

prizes.forEach(function(item, index) {
    console.log(`Prize ${index + 1}:` + item);
})



//Lesson Task 3

function delayedMessage(){
    console.log("I waited 5 seconds before executing.")
}

const fiveSecondCountdown = 5000;

setTimeout(delayedMessage, fiveSecondCountdown);



// Lesson Task 4

const timerCount = 1500;
let count = 0;

function timerSet(){
    count++;
    if (count === 4) {
        clearInterval(intervalTest);
    }
    console.log(count);
};


const intervalTest = setInterval(timerSet, timerCount);

*/


// Lekse 2.2

// Lesson Task 1

// const startButton = document.getElementById("startbtn");
// const counter = document.querySelector(".count");

// const twoSecondTimer = 500;
// let startCount = 0;


// startButton.onclick = function (){
// startButton.disabled = true;
// const testingThis = setInterval(function(){

//         startCount++;
//         counter.innerHTML = startCount;
//         if (startCount === 7){

//             clearInterval(testingThis);
//             startButton.disabled = false;
//         }
//         console.log(startCount);
//     }, twoSecondTimer);   
// };



// Lekse 2.3

// const btn = document.querySelector(".btn");

// const countBtn = document.querySelector(".countBtn");
// const textMessage = document.querySelector("input");
// const letterCount = document.querySelector(".count");
// const finalMessage = textMessage.value;
// const trimmedMessage = finalMessage.trim();


// const btnMessage = function () {
//     console.log("I'm a button");
// };



// btn.addEventListener("click", btnMessage);

// countBtn.addEventListener("click", function(){
//     letterCount.innerHTML = trimmedMessage.length
// });


// Lekse 2.4






