// Function to display values on the screen
function display(value) {
    document.getElementById("result").value += value;
}

// Function to clear the screen
function clearScreen() {
    document.getElementById("result").value = "";
}

// Function to calculate the result
function calculate() {
    let input = document.getElementById("result").value;
    try {
        let result = eval(input);  // eval is used here for simplicity, but it's generally not recommended for untrusted input
        document.getElementById("result").value = result;
    } catch (e) {
        document.getElementById("result").value = "Error";
    }
}
