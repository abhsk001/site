/**
 * Created by abhishek on 1/3/17.
 */
//Javascript function
//Arguments
//function sayHello(name,greeting){
//    if(typeof name==="undefined"){
//        return 0;
//    }
//
//    if(typeof greeting==='undefined'){
//        greeting='Hello';
//    }
//    console.log(greeting+'World!'+name);
//    //return values
//    return name.length;
//
//}
//
//console.log(sayHello("james","Greetings"));
//console.log(sayHello("jim"));
//console.log(sayHello());



//Scope It's very important to understand.

//var color ='black';
//var number =1;
//
//
//function showColor()
//{
//    var color ='green';
//     shape='square';
//
//    number=2;
//
//    console.log('showColor color', color);
//    console.log('showColor number',number);
//    console.log('showColor shape',shape);
//}
//
// showColor();
//console.log('global color',color);
//console.log('global number',number);
//console.log('global shape',shape);
//scope ends here.


//Anonymous Function

//var myFunction=function(){
//     console.log('My function was called');
//    undeclearedvariable;
//};
// var callTwice =function (targetFunction) {
//    targetFunction();
//    targetFunction();
//};
//
//callTwice(function(){
//console.log('Hello from anon function');
//
//});
//
//
//
//(function (){
//    var a, b,c;
//    //......
//    console.log('from anon function')
//})(1,'hello')
//

//Examples

var button=document.getElementById('action');
var input=document.getElementById('text_field');

//button.onclick=function (){
//    console.log('clicked');
//}
//
//button.onclick=function (){
//    console.log(' other click listner');
//}

button.addEventListener('click' , function (){
    console.log('clicked');

});

button.addEventListener('click' , function (){
    console.log(' other click');
    input.setAttribute('value','Hello world!');
});