/**
 * Created by abhishek on 1/2/17.
 */
//javascripts Numbers

//whole Numbers
var a=11,
    b=-123;
var c=1.5,
    d=123.456;

var e=0.1,
    f=0.2;
var result = e*f;

var g=1.23E16;
var h=012;
//ff 00 00
// take care of those number in hexadecimal
var i=0x10
var j=parseInt("197",10);
var k=parseInt("010111",2);

var l=parseInt("there are 23 people",10);
console.log(isNaN(l))
//if we add strings before number then it will give NaN
var m =parseFloat("0123.456 is a strange number");

//operator

var o=1+2.4;
var p=10-7.3;
var q=3*4.2;
var r=10/5;
var s=10%3;

var t= (1 + 2) * (3 / 4);

//comparision

console.log(1===parseInt("1",10));
console.log(1!==3);

if(1<2){
    console.log("Yes");
} else{
    console.log("No");
}

var u = Math.round(Math.random()*10);
var v = Math.round(2.7);
var w = Math.floor(2.33);
var x = Math.ceil(2.7);
var y = Math.pow(2,5);
var z = Math.sqrt(2);
