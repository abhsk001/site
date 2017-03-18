/**
 * Created by abhishek on 1/2/17.
 */
//concatenation
var part1="Hello";
var part2=" World!";
var whole=part1 + part2;
console.log(whole+"!!!!!"+"abhishek");

//methods1
var length=whole.length;
console.log(whole,length);
var index=whole.indexOf("World");
console.log(index);
var index2=whole.indexOf("world");
console.log(index2);

if(whole.indexOf("W")!==1){
    console.log("W exists in strings")
}   else{
    console.log("W does not exists");
}


//methods 2
console.log(whole.charAt(6));
"Hello World!"
//(start,length)
var world=whole.substr(3,8)
console.log(world);

console.log(whole.toLowerCase());
console.log(whole.toLocaleUpperCase());
console.log(whole);



//comparing strings
var first="Hello";
var second="hello";

if(first.toLowerCase()===second.toLocaleLowerCase()){
    console.log("The strings are equal")
}  else{
    console.log("The strings are different")
}
function compare(a,b){
    console.log(a+ "<=" +b, a<=b);
}
compare('a','b');
compare('a','A');
compare('apple','oranges');
compare('apple','application');
compare('app','apples');
compare('hello','hello');


