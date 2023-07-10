tailwind.config = {
    content: [],
    theme: {
        screens: {
            'sm': '400px', //If you only add one screen size in js fiel, it will override all the screens availavle
            'lg': '1024px',
        },
        extend: {

        },
    },
    plugins: [],
}


function show(parameter) {
    var nums = parameter.getAttribute("data-value");
    var numInputs = document.getElementsByClassName("input");
    if (nums === "") {
        for (var i = 0; i < numInputs.length; i++) {
            numInputs[i].value = "";
        }
    }
    else {
        for (var i = 0; i < numInputs.length; i++) {
            numInputs[i].value = numInputs[i].value + nums;
        }
    }
}
function backspace() {
    var output = document.getElementsByClassName("input")[0].value;
    output = output.slice(0, -1);
    document.getElementsByClassName("input")[0].value = output;
}
function result() {
    var output = document.getElementsByClassName("input")[0].value;
    document.getElementsByClassName("input")[0].value = eval(output);
}
document.getElementById("theme").textContent = "DARK";
function change() {
    var bg = document.getElementById("theme");

    var body = document.getElementById("body");
    var navbar = document.getElementById("navbar");
    var header = document.getElementById("heading");
    var calcu_boundary = document.getElementById("cal");

    if (bg.textContent === "DARK") {
        bg.textContent = "LIGHT";
        bg.style.color = "black";
        body.style.background = "black";
        navbar.style.background = "white";
        header.style.color = "black";
        calcu_boundary.style.borderColor="white";
    }
    else {
        bg.textContent = "DARK";
        bg.style.color = "white";
        body.style.background = "#D1D5DB";
        navbar.style.background = "#10161D";
        header.style.color = "white";
        calcu_boundary.style.borderColor="black";
    }
}