window.onload = function(){
    start();

}
let button;
let first;

let elements = ['first', 'second', 'third', 'fourth'];

function start(){
    button = document.querySelector("#changeColorButton");
    first = document.querySelector("#first");
    button.addEventListener('click', changeColor);

    for(let e in elements){
        console.log(e);
    }

    printArray();

}

function changeColor(){
    first.style.backgroundColor = "red";
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    first.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    second.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function printArray(){
    text = '<ul>'

    for(let i = 0; i < elements.length; i++){
        text +='<li>'+ elements[i] +'</li>';
    }

    text +='</ul>'
    console.log(text);
    second.innerHTML = text;
}