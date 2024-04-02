function simpleAlert(){
    document.getElementById("display").innerHTML= "Hello, How are you.";
    alert("Hello, How are you.")
}
function alertName() {
   var name= document.getElementById("inputValue").value ;
    var addname= document.getElementById("display");
    addname.innerHTML = name;
}
var cities= ["Lahore","Faisalabad","Karachi","Isalamabad","Burewala","Sheikhpura","Kashmir"];
function printAllCities(){
    var output= "";
    for (var index = 0; index < cities.length; index++) {
        output += index + ") " + cities[index] + "<br>";
    document.getElementById("display").innerHTML = output;
    }
}
function addcityList(){
    var inputName =document.getElementById("inputValue").value;
    if (inputName ===""){
        alert("Please enter your city")
    return;
    }
    cities.push(inputName)
    var output= "";
    for (var index = 0; index < cities.length; index++) {
        output += index + ") " + cities[index] + "<br>";
    document.getElementById("display").innerHTML = output;
    }
}
function generatetable(){
    var tableNumber =document.getElementById("inputValue").value;
    for(var i=1 ; i<=10 ; i++){
    document.getElementById("display").innerHTML += tableNumber  + "*" + i + "=" + i * tableNumber + "<br>";

    }
}
