// Select the form element from the DOM
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function(e){
    e.preventDefault(); // Prevent form submission and page reload

    // Get height and weight values from the input fields and parse them as integers
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    // Select the result element to display output
    const result = document.querySelector('.result');

    // Validate height input
    if(isNaN(height) || height <= 0){
        result.innerHTML = "Please enter valid numbers for height ";
    // Validate weight input
    } else if(isNaN(weight) || weight <= 0){
        result.innerHTML = "Please enter valid numbers for weight ";
    } else {
        // Calculate BMI using the formula and round to 2 decimal places
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        let category = "";

        // Determine BMI category
        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 24.9) {
            category = "Normal weight";
        } else if (bmi < 29.9) {
            category = "Overweight";
        } 

        // Display the BMI result and category in the result element
        result.innerHTML = `Your BMI is: <span id="bmi-result">${bmi}</span> (<span id="bmi-category">${category}</span>)`;
    }

});