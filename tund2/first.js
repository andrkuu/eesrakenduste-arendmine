var counter = 1;
function myFunction() {
    console.log("Muudan teksti ära.");

    var temp = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML = document.getElementById("first").innerHTML;
    document.getElementById("first").innerHTML = temp;
    /*
    if(counter === 1){
        counter = 2;
        document.getElementById("demo").innerHTML = "Esimene tekst";
        document.getElementById("first").innerHTML = "Teine tekst";
    }else{
        counter = 1;
        document.getElementById("first").innerHTML = "Esimene tekst";
        document.getElementById("demo").innerHTML = "Teine tekst";
    }*/

}

const first = 1;
console.log(first);
let second = 2;
console.log(second);

window.onload = function () {
    document.getElementById("demo").innerHTML = "Esimene tekst";
    document.getElementById("first").innerHTML = "Teine tekst";
    myFunction();
}