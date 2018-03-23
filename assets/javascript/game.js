"use strict"

// Initially, all enemies hidden
const playerArray = ["destructAll", "shredder", "obliterate", "pulverize"];
let attackerIndex = 0;
let defenderIndex = 0;
let numEnemies = 3;

let destructAll = {
    healthPoints: 127,
    baseAttackPower: 13,
    attackPower: 0,
    counterAttackPower: 23,
    nowPlaying: false,
};

let shredder = {
    healthPoints: 103,
    baseAttackPower: 7,
    attackPower: 0,
    counterAttackPower: 17,
    nowPlaying: false,
};

let obliterate = {
    healthPoints: 179,
    baseAttackPower: 9,
    attackPower: 0,
    counterAttackPower: 19,
    nowPlaying: false,
};

let pulverize = {
    healthPoints: 151,
    baseAttackPower: 11,
    attackPower: 0,
    counterAttackPower: 13,
    nowPlaying: false,
};



$("#health1").text(destructAll.healthPoints);
$("#health2").text(obliterate.healthPoints);
$("#health3").text(shredder.healthPoints);
$("#health4").text(pulverize.healthPoints);

$(".d2").hide();
$(".s2").hide();
$(".o2").hide();
$(".p2").hide();

$(".d3").hide();
$(".s3").hide();
$(".o3").hide();
$(".p3").hide();

//click on top row
$(".top").click(function () {
    console.log($(this).val());
    attackerIndex = Number($(this).val());
    //your character
    if ($(this).val() !== "0") {
        $(".d1").hide();
    }
    if ($(this).val() !== "1") {
        $(".s1").hide();
    }
    if ($(this).val() !== "2") {
        $(".o1").hide();
    }
    if ($(this).val() !== "3") {
        $(".p1").hide();
    }
    //enemies available to attack
    if ($(this).val() !== "0") {
        $(".d2").show();
        $("#mhealth1").text(destructAll.healthPoints);
    }
    if ($(this).val() !== "1") {
        $(".s2").show();
        $("#mhealth2").text(obliterate.healthPoints);
    }
    if ($(this).val() !== "2") {
        $(".o2").show();
        $("#mhealth3").text(shredder.healthPoints);
    }
    if ($(this).val() !== "3") {
        $(".p2").show();
        $("#mhealth4").text(pulverize.healthPoints);
    }
});


//click on enemies row
$(".middle").click(function () {
    defenderIndex = Number($(this).val());
    //reduce number of enemies
    numEnemies--;
    if (numEnemies === -1) {
        errorMsg();
    }
    //hide enemy selected
    if ($(this).val() === "0") {
        $(".d2").hide();
    }
    if ($(this).val() === "1") {
        $(".s2").hide();
    }
    if ($(this).val() === "2") {
        $(".o2").hide();
    }
    if ($(this).val() === "3") {
        $(".p2").hide();
    }
    // hide all defenders except one selected
    $(".d3").hide();
    $(".s3").hide();
    $(".o3").hide();
    $(".p3").hide();

    if ($(this).val() === "0") {
        $(".d3").show();
        $("#bhealth1").text(destructAll.healthPoints);
    }
    if ($(this).val() === "1") {
        $(".s3").show();
        $("#bhealth2").text(obliterate.healthPoints);
    }
    if ($(this).val() === "2") {
        $(".o3").show();
        $("#bhealth3").text(shredder.healthPoints);
    }
    if ($(this).val() === "3") {
        $(".p3").show();
        $("#bhealth4").text(pulverize.healthPoints);
    }



});

function errorMsg (){
    $("#errormsg").text("No defenders to fight");
};

//  var parsed = parseInt(x, base);

//  $("#mhealth1").text(destructAll.healthPoints);





// $("#bhealth1").text(destructAll.healthPoints);
// $("#bhealth2").text(obliterate.healthPoints);
// $("#bhealth3").text(shredder.healthPoints);
// $("#bhealth4").text(pulverize.healthPoints);





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
