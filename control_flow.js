// Control Flow Statements in JavaScript

// If-Else Statement (if, if else, if else-if else)
// if (condition) {} --> condition true hoy to {} code run
if (12 < 13) {
    console.log(true);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run

if (!12) {  //12 --> true, !12 --> false
    console.log("number");
}

if (!0) {
    console.log("number");
}


// if-else Statement
if (12 < 13) {
    console.log(true);
} else {
    console.log(false);
}

if (15 < 13) {
    console.log(true);
} // condition is false that why if statement not run
else {
    console.log(false); // if if statement condition is false then run this code
}

if (!12) {
    console.log("number");
} else {
    console.log("Not A Number");
}


// if-else if-else Statement
/*
if (condition) {
} else if (condition) {
} else {
}
*/

let loggedin = false;
let admin = false;

if (loggedin && admin) {
    console.log("welcome admin");
}
else if (loggedin) {
    console.log("welcome user");
}
else {
    console.log("go to login page");
}

//example

let temperature = 36;

if (temperature > 35) {
    console.log("Very Hot");
} else if (temperature > 25) {
    console.log("Warm");
} else {
    console.log("Cold");
}


// switch case Statement
switch ("BOGO") // value --> case value sathe match karshe ane code run thase
{
    case "First50":
        console.log("50% Off on First Order");
        break;

    case "BOGO":
        console.log("Buy one get one");
        break;

    case "BlackFriday":
        console.log("It's Black Friday Sale - get at Rs. 50");
        break;

    default:
        console.log("Offer Not Vaild");
}

//example

let paymentMode = "Card";

switch (paymentMode) {
    case "Cash":
        console.log("Payment received in Cash");
        break;

    case "Card":
        console.log("Payment done using Debit/Credit Card");
        break;

    case "UPI":
        console.log("Payment done using UPI");
        break;

    default:
        console.log("Invalid Payment Mode");
}

// Early Return Pattern
// function score(value) {
//     if (value > 90) {
//         return "Value is more than 90";
//     } 
//     else if (value < 80) {
//         return "Value is less than 80";
//     } 
//     else if (value < 70) {
//         return "Value is less than 70";
//     } 
//     else if (value < 60) {
//         return "Value is less than 60";
//     } 
//     else {
//         return "Value is less than 60";
//     }
// }
function score(value) {
    if (value > 90) {
        return "Value is more than 90";
    } 
    else if (value < 60) {
        return "Value is less than 60";
    } 
    else if (value < 70) {
        return "Value is less than 70";
    } 
    else if (value < 80) {
        return "Value is less than 80";
    } 
    else {
        return "Value is between 80 and 90";
    }
}


score(100);
console.log(score(100))

// function score1(value) {
//     if (value > 90) return "Value is more than 90";
//     else if (value < 80) return "Value is less than 80";
//     else if (value < 70) return "Value is less than 70";
//     else if (value < 60) return "Value is less than 60";
//     else return "Value is less than 60";
// }
