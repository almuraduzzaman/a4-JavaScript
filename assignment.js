/*
Problem:1
----------
This mindGame() function takes a positive number as parameter. Then performs some calculations and then returns an output.
*/

function mindGame(positiveNum) {
    if (positiveNum !== Math.abs(positiveNum)) {
        return "Please Enter a Positive Number!";
    }
    return (((positiveNum * 3) + 10) / 2) - 5;
}

// console.log(mindGame(33));



/*
Problem:2
----------
This evenOdd() function takes a string as parameter. The output should be given based on the total number of characters in the String. Output will be 'even' or 'odd'.
*/

function evenOdd(str) {
    if (typeof str !== "string") {
        return "Please Enter a String!";
    }

    if (str.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// console.log(evenOdd("Batch7"));



/*
Problem:3
----------
This isLGSeven() function takes a number as parameter. Need to find the difference between the input value and 7. If this difference is smaller than 7, must return the subtraction. Otherwise must return double of the input.
*/

function isLGSeven(num) {
    if (typeof num !== "number") {
        return "Please Enter a Number!"
    }

    if ((num - 7) < 7) {
        return (num - 7);
    } else {
        return num * 2;
    }
}

// console.log(isLGSeven(15));



/*
Problem:4
----------
This findingBadData() function takes an number array as parameter. If any number is negative then it's "Bad Data". If a number is positive, then it's "Good Data".Have to find how much bad data are there in the array and must return that number.
*/

function findingBadData(data) {
    if (Array.isArray(data) !== true) {
        return "Please Enter a Number Array!"
    }
    let badDataCount = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] !== 'number') {
            return "Please Enter Numbers into Array!";
        } else if (data[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}


// const input = [-4, -9, -5, -33, -55];
// const input = [-4, -9, -5, -33, -55, "murad"];
// const input = 50;
// console.log(findingBadData(input));



/*
Problem:5
----------
This gemsToDiamond() function takes three numbers as parameters. Have to figure out how many diamonds in total by combining all the friends' gems. If the total number of diamonds is more than 1000*2, then subtract 2000 from the total number of diamonds and will get the remaining number of diamonds.
*/

function gemsToDiamond(gems1, gems2, gems3) {
    if (typeof gems1 !== "number" || typeof gems2 !== "number" || typeof gems3 !== "number") {
        return "Please Enter 3 Gems Number!";
    }

    const gemsPow1 = 21;
    const gemsPow2 = 32;
    const gemsPow3 = 43;
    let total = (gemsPow1 * gems1) + (gemsPow2 * gems2) + (gemsPow3 * gems3);

    if (total > 2000) {
        return total - 2000;
    }
    return total;
}

// console.log(gemsToDiamond(20, 200, 50));