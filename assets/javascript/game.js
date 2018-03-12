"use strict"

let hp1 = 127;
let hp2 = 103;
let hp3 = 179;
let hp4 = 151;


$("#health1").text(hp1);
$("#health2").text(hp2);
$("#health3").text(hp3);
$("#health4").text(hp4);

let DestructAll = {
    healthPoints: 0,
    baseAttackPower: 0,
    attackPower: 0,
    counterAttackPower: 0,
    nowPlaying: false,
}



// //create function to get a random number between min and max, inclusive
// function getRandomInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// let targetValue = 0;
// let currentScore = 0;
// let numberOfWins = 0;
// let numberOfLosses = 0;
//
// let blue = 0;
// let diamond = 0;
// let purple = 0;
// let yellow = 0;
//
// let done = false;
//
// // assign random numbers to target and crystals
// targetValue = getRandomInclusive(19, 120);
// blue = getRandomInclusive(1, 12);
// diamond = getRandomInclusive(1, 12);
// purple = getRandomInclusive(1, 12);
// yellow = getRandomInclusive(1, 12);
//
// $("#target").text(targetValue);
// $("#score").text(currentScore);
//
// $("#numwins").text(`Number of wins: ${numberOfWins}`);
// $("#numlosses").text(`Number of losses: ${numberOfLosses}`);
//
// function reset () {
//     currentScore = 0;
//     done = false;
//     // assign random numbers to target and crystals
//     targetValue = getRandomInclusive(19, 120);
//     blue = getRandomInclusive(1, 12);
//     diamond = getRandomInclusive(1, 12);
//     purple = getRandomInclusive(1, 12);
//     yellow = getRandomInclusive(1, 12);
//
//     $("#target").text(targetValue);
//     $("#score").text(currentScore);
//     $("#numwins").text(`Number of wins: ${numberOfWins}`);
//     $("#numlosses").text(`Number of losses: ${numberOfLosses}`);
// }
//
//
// //blue button clicked
// $(".btn1").on("click", function () {
//     $("#winorlossnotice").empty();
//     currentScore += blue;
//     $("#score").text(currentScore);
//     checkForEndOfGame ();
// });
//
// //diamond button clicked
// $(".btn2").on("click", function () {
//     $("#winorlossnotice").empty();
//     currentScore += diamond;
//     $("#score").text(currentScore);
//     checkForEndOfGame();
// });
//
// //purple button clicked
// $(".btn3").on("click", function () {
//     $("#winorlossnotice").empty();
//     currentScore += purple;
//     $("#score").text(currentScore);
//     checkForEndOfGame();
// });
//
// //yellow button clicked
// $(".btn4").on("click", function () {
//     $("#winorlossnotice").empty();
//     currentScore += yellow;
//     $("#score").text(currentScore);
//     checkForEndOfGame();
// });
//
// function checkForEndOfGame () {
//     if (currentScore === targetValue) {
//         $("#winorlossnotice").text("Success!! You won! Game reset...try again");
//         numberOfWins++;
//         $("#numwins").text(`Number of wins: ${numberOfWins}`);
//         reset ();
//     }
//     if (currentScore > targetValue) {
//         $("#winorlossnotice").text("Sorry!! You lost! Game reset...try again");
//         numberOfLosses++;
//         $("#numlosses").text(`Number of losses: ${numberOfLosses}`);
//         reset ();
//     }
// }
