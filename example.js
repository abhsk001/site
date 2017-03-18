/**
 * Created by abhishek on 1/5/17.
 */
//var animals=[
//    {name:'fluffykins',species:'rabbit'},
//    {name:'carlo',species:'dog'},
//    {name:'hamilton',speies:'dog'},
//    {name:'harod',species:'fish'},
//    {name:'Urusula',species:'cat'},
//    {name:'Jimmy',species:'fish'},
//];

var advertisement = [

    {category:"car", value:[["Car for Sale", "My brand new car is one sale","Contact Abhishek thakur","car1.jpg"],["My Brand new  Honda","Honda is the best","contact pradio humagina","car2.jpg"],["New Model Car for sale","Car is in great condition","contact Ganesh","car3.jpg"],["Creta car for sale","Good condition car is on sale","contact Robin Hood","car4.jpg"],["Mercides car is on sale","Looks like brand new","contact Shyam","car5.jpg"],["Audi car is on sale!","My car looks like brand new.","contact salman","car6.jpg"],["BMW sports car is on sale!","The car is brand new.","contact hari","car8.jpg"],["Lamborhgini  car is on sale!","The car is brand new.","contact smita","car7.jpg"],["Buccati sports car is on sale!","The car is brand new.","contact Jayson","car9.jpg"]]},
    {category:"bike",value:[["Bike for Sale", "My brand new bike is on sale","Contact Abhishek thakur","bike1.png"],["My brand new yamaha R15","yamaha is the best","contact Jagat chetry","bike2.jpg"],["Bike for sale","Good condition bike for sale","contact Mack Millar","bike3.jpg"],["Suzuki hyabusa bike is on sale","Only one year used.","contact rabi","bike4.jpg"],["Kawasaki Ninja bike is on sale","very good condition bike","contact Pankaj","bike5.jpg"],["Royal Enfield bike is on sale","Its a good bike looks like new","Contact Chandrakant","bike6.jpg"],["Royal Enfield bike is on sale","Its a good bike looks like new","Contact Chandrakant","bike6.jpg"]]},
    {category:"home",value:[["home for Sale", "My home is on sale", "Contact Abhishek thakur","house.jpg"],["home for rent","Fully furnished house available for rent","contact Robin Hood","house1.jpg"],["Home for sell","well decorated and newly made.","contact:Nabin yadav","house2.jpg"],["Home for sale near Lokanthali","home is 2 storied and well furnished","contact Gopi kisan","house3.jpg"],["Home for sale!","A newly constructed house eathquake proof","contact Pankaj","house4.jpg"],["Home for sale!","Four storied house with well furnished","contact Pawan","house5.jpg"],["Home for sale","Newly constructed house is on sale","contact Robot","house5.jpg"]]},
    {category:"laptop",value:[["Laptop for sale","Hp laptop is on sale","contact jack man","hp.jpg"],["Laptop for sale","Lenevo laptop is on sale","Lazor","lenovo.png"],["Laptop for sale","Apple laptop is on sale","contact Greg pitt","mac.jpg"]]}
];


function getCount(value)
{
    var cnt;
    for(var i=0;i<advertisement.length;i++)
    {
        if(advertisement[i].category == value) {
           cnt=advertisement[i].value.length;
        }


    }
    return cnt;
}
function getValues(value, loopVar, loopCount) {
    console.log("value inside "+value);
    var temp =0;
    for(temp=0;temp<advertisement.length;temp++) {
        if(advertisement[temp].category == value) {
            var myValue = advertisement[temp].value;
            multipleFunction(myValue, loopVar, loopCount);
        }
    }


function multipleFunction(adv,loopVar,loopCount) {
    //console.log("adv.length: "+adv.length);
    var x = document.getElementById("advertisementDisplay");
    var bikeText="";
    var temp;

    //if(6<12)
    if(adv.length<loopVar+loopVar*(loopCount-1)){
        loopVar=adv.length;
        //alert("here: "+loopVar);
    }

    //for(temp=3;temp<6;temp++) {
    //for(temp=18; temp<6; temp++)

    for(temp=loopVar*(loopCount-1);temp<loopVar+loopVar*(loopCount-1); temp++) {
        //console.log("adv: "+adv);
        bikeText += advFunction(adv[temp][0],adv[temp][1],adv[temp][2],adv[temp][3]);
    }

    x.innerHTML = bikeText;
}

function advFunction(heading,desc,contact,img) {

    var x = '<div class="row">' +
        '<div class="col-md-12">' +
        '<div class="panel panel-default">' +
        '<div class="panel-heading">' +
        heading +
        '</div> ' +
        '<div class="panel-body">' +
        desc +
        '<img src="img/'+img+'" alt="image" height="100px">' +
        ' </div> ' +
        '<div class="panel-footer">' +
        contact +
        '</div>' +
        ' </div> ' +
        '</div> ' +
        '</div>';
    return x;
}}















