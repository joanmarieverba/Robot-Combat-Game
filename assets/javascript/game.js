"use strict"

// Initially, all enemies hidden

let attackerIndex = 0;
let defenderIndex = 0;
let numEnemies = 3;
let attackPower = 0;
let defender = 0;

let players = [

{   name: "DestructAll",
    healthPoints: 127,
    baseAttackPower: 13,
    attackPower: 0,
    counterAttackPower: 23,
    nowPlaying: false,
},

{   name: "Shredder",
    healthPoints: 103,
    baseAttackPower: 7,
    attackPower: 0,
    counterAttackPower: 17,
    nowPlaying: false,
},

{   name: "Obliterator",
    healthPoints: 179,
    baseAttackPower: 19,
    attackPower: 0,
    counterAttackPower: 19,
    nowPlaying: false,
},


{   name: "Pulverizer",
    healthPoints: 151,
    baseAttackPower: 11,
    attackPower: 0,
    counterAttackPower: 13,
    nowPlaying: false,
}
];

$("#health1").text(players[0].healthPoints);
$("#health2").text(players[1].healthPoints);
$("#health3").text(players[2].healthPoints);
$("#health4").text(players[3].healthPoints);

$(".d2").hide();
$(".s2").hide();
$(".o2").hide();
$(".p2").hide();

$(".d3").hide();
$(".s3").hide();
$(".o3").hide();
$(".p3").hide();

$(".restart").hide();

//click on top row
$(".top").click(function () {
    console.log($(this).val());
    attackerIndex = Number($(this).val());
    defender = 0;
    $("#errormsg").empty();
    
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
        $("#mhealth1").text(players[0].healthPoints);
    }
    if ($(this).val() !== "1") {
        $(".s2").show();
        $("#mhealth2").text(players[1].healthPoints);
    }
    if ($(this).val() !== "2") {
        $(".o2").show();
        $("#mhealth3").text(players[2].healthPoints);
    }
    if ($(this).val() !== "3") {
        $(".p2").show();
        $("#mhealth4").text(players[3].healthPoints);
    }
});


//click on enemies row
$(".middle").click(function () {
    defenderIndex = Number($(this).val());
    //reduce number of enemies
    numEnemies--;

    defender = 1;
    $("#errormsg").empty();

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
    // clear any previous attack result
    $("#attackresult").empty();

    if ($(this).val() === "0") {
        $(".d3").show();
        $("#bhealth1").text(127);
    }
    if ($(this).val() === "1") {
        $(".s3").show();
        $("#bhealth2").text(103);
    }
    if ($(this).val() === "2") {
        $(".o3").show();
        $("#bhealth3").text(179);
    }
    if ($(this).val() === "3") {
        $(".p3").show();
        $("#bhealth4").text(151);
    }

});

$(".fight").click(function () {
    console.log("defender ", defender);
    if (defender === 0) {
        errorMsg();
    } else {

    $("#errormsg").empty();

    players[attackerIndex].healthPoints = players[attackerIndex].healthPoints - players[defenderIndex].counterAttackPower;
    attackPower = attackPower + players[attackerIndex].baseAttackPower;
    players[defenderIndex].healthPoints = players[defenderIndex].healthPoints - attackPower;

    let a1 = attackerIndex + 1;
    let d1 = defenderIndex + 1;

    $("#health" + a1).text(players[attackerIndex].healthPoints);
    $("#bhealth" + d1).text(players[defenderIndex].healthPoints);

    if (players[attackerIndex].healthPoints < 0 && players[defenderIndex].healthPoints < 0) {

        $("#gameresult").text("You have destroyed each other...GAME OVER!!!");
        $(".restart").show();
        $("#attackresult").empty();
        $("#defendresult").empty();
    };

    if (players[attackerIndex].healthPoints > 0 && players[defenderIndex].healthPoints > 0){

        $("#attackresult").text(`You attacked ${players[defenderIndex].name} for ${attackPower} damage`);
        $("#defendresult").text(`${players[defenderIndex].name} attacked you for ${players[defenderIndex].counterAttackPower} damage`);
    };
    
    if (players[attackerIndex].healthPoints < 0 && players[defenderIndex].healthPoints > 0) {

        $("#gameresult").text("You have been defeated...GAME OVER!!!");
        $(".restart").show();
        $("#attackresult").empty();
        $("#defendresult").empty();

    };

    if (players[attackerIndex].healthPoints > 0 && players[defenderIndex].healthPoints < 0  && numEnemies !== 0) {

        $("#attackresult").text(`You have defeated ${players[defenderIndex].name}. You can choose to fight another enemy`);
        $("#defendresult").empty();

        if (defenderIndex === 0) {$(".d3").hide();}
        if (defenderIndex === 1) {$(".s3").hide();}
        if (defenderIndex === 2) {$(".o3").hide();}
        if (defenderIndex === 3) {$(".p3").hide();}
    };

    if (players[attackerIndex].healthPoints > 0 && players[defenderIndex].healthPoints < 0 && numEnemies === 0) {
      
        $("#gameresult").text("You won!!! GAME OVER!!!");
        $(".restart").show();
        $("#attackresult").empty();
        $("#defendresult").empty();

        $(".d3").hide();
        $(".s3").hide();
        $(".o3").hide();
        $(".p3").hide();

    };
    };

});    

function errorMsg (){
    $("#attackresult").empty();
    $("#defendresult").empty();
    $("#gameresult").empty();
    $("#errormsg").text("No enemy here");
};

function reset () {

    $(".d1").show();
    $(".s1").show();
    $(".o1").show();
    $(".p1").show();

    $("#health1").text(127);
    $("#health2").text(103);
    $("#health3").text(179);
    $("#health4").text(151);

    $(".d2").hide();
    $(".s2").hide();
    $(".o2").hide();
    $(".p2").hide();

    $("#mhealth1").text(127);
    $("#mhealth2").text(103);
    $("#mhealth3").text(179);
    $("#mhealth4").text(151);

    $(".d3").hide();
    $(".s3").hide();
    $(".o3").hide();
    $(".p3").hide();

    $("#bhealth1").text(127);
    $("#bhealth2").text(103);
    $("#bhealth3").text(179);
    $("#bhealth4").text(151);

    players[0].healthPoints = 127;
    players[1].healthPoints = 103;
    players[2].healthPoints = 179;
    players[3].healthPoints = 151;

    $(".restart").hide();
    $("#attackresult").empty();
    $("#defendresult").empty();
    $("#gameresult").empty();
    $("#errormsg").empty();

    attackPower = 0;
    numEnemies = 3;
    defender = 0;
};

$(".restart").click(function () {
    reset();
});

