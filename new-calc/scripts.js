class Calculator {
    // Responsibilities:
    // Manages calculations.
    // Interacts with the display to show the current expression and results.
    // Stores the current expression as a string.
    // Evaluates the expression and stores the result.
    // Handles clearing of the expression.
    constructor() {
        this.expression = ""; //current expression
        this.result = null; //current result
    }

    // Add your calculator methods here
}

class Display {
    constructor() {
        constructor(displayElement) {
            this.displayElement = displayElement;
        }

        updateDisplay(content) {
            this.displayElement.innerText = content;
        }
    }

class Buttons {
    constructor() {
        // Add button properties and methods here
    }

    // Add button methods here
}