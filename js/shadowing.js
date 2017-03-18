/**
 * Created by abhishek on 1/1/17.
 */
//shadowing

var myColor="Blue";
console.log("myColor before myFunc",myColor);

function myFunc () {
    var myColor = "yellow";
    var myNumber = 42;
    console.log("myColor inside myFunc()", myColor);
}

myFunc();
console.log("myColor after myFunc()", myColor);
console.log("myNumber after myFunc()", myNumber);
