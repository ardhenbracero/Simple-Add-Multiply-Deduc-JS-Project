let buttons = document.getElementsByTagName("button");
let output = document.getElementsByClassName("output");
let num = 0;

display();
buttons[0].onclick = function(){
    num++;
    display();
};
buttons[1].onclick = function(){
    num*=2;
    display();
};
buttons[2].onclick = function(){
    num -=3;
    display();
};

function display(){
    output[0].innerHTML = "<h1>" + num + "<h1>"; 
};