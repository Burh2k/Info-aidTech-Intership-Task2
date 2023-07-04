function show(parameter) {
    var nums = parameter.getAttribute("data-value");
    var numInputs = document.getElementsByClassName("input");

    for (var i = 0; i < numInputs.length; i++) {
        numInputs[i].value = numInputs[i].value + nums;
    }
}
