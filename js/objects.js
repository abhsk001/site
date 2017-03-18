/**
 * Created by abhishek on 1/4/17.
 */
// JavaScript objects:

//var jim ={
//    "name":"jim",
//    "Skills":["javascript","Ruby","Dancing"],
    //    "favourite color":"green",
//
//
//};
//jim["favourite color"]="red";
//console.log(jim["name"]);
//console.log(jim["favourite color"]);


//Methods

var jim ={
    "name":"jim",
    "Skills":["javascript","Ruby","Dancing"],
    "favourite color":"green",
    greet:function(person){
        console.log('hello,I am '+ this.name);
    }
};
var nick ={
    "name":"Nick",
     greet:jim.greet
};
jim.name ="james";
jim["greet"]();
nick.greet();

var jimGreet=jim.greet;
jimGreet();

function WhatIsThis() {
    console.log(this);
}

WhatIsThis();


