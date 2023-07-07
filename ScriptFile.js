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
    var output = document.getElementsByClassName("input").value;

}