
function button(num) {
    document.getElementById("box").value += num;
}

function reset() {
    document.getElementById("box").value = "";
}

function calculate() {
    var resul = 0;
    var box = document.getElementById("box");

    resul = box.value;
    reset();

    box.value = eval(resul);
}