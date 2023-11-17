// get all elements with the class "key"
var keys = document.querySelectorAll(".key");
var inputDisplay = document.getElementById("input");
var outputDisplay = document.getElementById("output");

// click event
keys.forEach(key => {
    key.addEventListener("click", () => {
        var keyValue = key.dataset.key;

        if (keyValue === "clear") {
            inputDisplay.value = "";
            outputDisplay.value = "";
        } else if (keyValue === "=") {
            try {
                outputDisplay.value = eval(inputDisplay.value)
            } catch (error) {
                outputDisplay.value = "Error";
            }
        } else {
            inputDisplay.value += keyValue;
        }
    });
});