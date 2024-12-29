// function checkVariables(){
//     var a=10;
//     {
//         var a=20;
//         document.write(a);
//     }
//     document.write("<br>")
//     document.write(a)
// }
// checkVariables();

// function checkVariables(){
//     let a=10;
//     {
//         let a=20;
//         document.write(a);
//     }
//     document.write("<br>")
//     document.write(a)
// }
// checkVariables();

// function checkVariables(){
//     const a=10;
//     {  
//         const a=20;
//         document.write(a);
//     }
//     document.write("<br>")
//     document.write(a)
// }
// checkVariables();



// console.log(x);
// var x=10;
 
 //document.write(x);
// console.log(x);
 //let x=10;

// const x;
// console.log(x);  

// var x;
// document.write(x);
// document.write(typeof(x));

// let x = 5;
// let y = 10;

// if (x > 0 && y > 0) {
//   console.log("Both conditions are true");
// } else {
//   console.log("At least one condition is false");
// }

// let x = 5;
// let y = 0;

// if (x > 0 || y > 0) {
//   console.log("At least one condition is true");
// } else {
//   console.log("Both conditions are false");
// }

// let x=5;
// if(!x){
//     document.write("not equal");
// }else{
//     document.write("equal");
// }


// let score = prompt("Enter your score (out of 100): ");
// let bonusPoints = prompt("Enter your bonus points: ");

// // Convert the input values to numbers
// score = Number(score);
// bonusPoints = Number(bonusPoints);

// // Validate input (use comparison and logical operators)
// if (isNaN(score) || score < 0 || score > 100) {
//     console.log("Invalid score. Please enter a number between 0 and 100.");
// } else {
//     // Check for bonus points using switch
//     switch (true) {
//         case bonusPoints > 5:
//             score += 5;
//             break;
//         default:
//             score += 0;
//     }

//     // Ensure the score does not exceed 100 after adding bonus points
//     if (score > 100) {
//         score = 100;
//     }

//     // Decision making for grades using if, else if, and else
//     if (score >= 90) {
//        document.write("Your grade is A+.");
//     } else if (score >= 80) {
//         document.write("Your grade is A.");
//     } else if (score >= 70) {
//         document.write("Your grade is B.");
//     } else if (score >= 60) {
//         document.write("Your grade is C.");
//     } else if (score >= 50) {
//         document.write("Your grade is D.");
//     } else {
//         document.write("Your grade is F.");
//     }
// }


// function checkVariables(){
//     var a = 10;
//     {
//         a = 20; // Error: Cannot assign to constant variable.
//         document.write(a);
//     }
//     document.write("<br>");
//     document.write(a);
// }
// checkVariables();


// function checkVariables(){
//     let a = 10;
//     {
//         a = 20; // Error: Cannot assign to constant variable.
//         document.write(a);
//     }
//     document.write("<br>");
//     document.write(a);
// }
// checkVariables();

// function checkVariables(){
//     const a = 10;
//     {
//         a = 20; // Error: Cannot assign to constant variable.
//         document.write(a);
//     }
//     document.write("<br>");
//     document.write(a);
// }
// checkVariables();

function checkVariables(){
        let a=10;
        {
            let a=20;
            document.write(a);
        }
        document.write("<br>")
        document.write(a)
    }
    checkVariables();
    