function button(num) {
   document.getElementById("box").value += num;
}

function reset(){
    document.getElementById("box").value = "";
}

function calculate(){
    var resul = 0;
    resul = document.getElementById("box").value;
    document.getElementById("box").value = "";
    document.getElementById("box").value = eval(resul);
}