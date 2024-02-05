

const h1 = document.createElement("h1");
document.body.appendChild(h1);

h1.innerText = "PRASHANT PANDEY";
h1.style.textAlign = "center";
h1.style.color = "#A9A9A9";

var num1Input = document.createElement("input");
var num2Input = document.createElement("input");

var addButton = document.createElement("button");
addButton.textContent = "Add";
addButton.onclick = calculateSum;

var resultParagraph = document.createElement("p");
resultParagraph.id = "result";

document.body.appendChild(num1Input);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(num2Input);
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.body.appendChild(addButton);
document.body.appendChild(resultParagraph);

const validateInput = (inputValue, inputElement) => {
    try {
        const num = parseFloat(inputValue);
        if (isNaN(num)) {
            throw new Error("Please enter a valid number.");
        }
        resultParagraph.textContent = '';
        inputElement.style.border = '';
        return num;
    } catch (error) {
        resultParagraph.textContent = error.message;
        inputElement.style.border = '1px solid red';
        throw error;
    }
};

function calculateSum() {
    try {
        const num1 = validateInput(num1Input.value, num1Input);
        const num2 = validateInput(num2Input.value, num2Input);
        const sum = num1 + num2;
        resultParagraph.textContent = 'Sum: ' + sum;
    } catch (error) {
        
    }
}
