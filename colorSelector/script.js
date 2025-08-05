  // Select all elements with class 'button'
        const colorButtons = document.querySelectorAll('.button');
        // Select the body element
        const body = document.querySelector('body');
        // Select the color name element
        const colorNameElement = document.querySelector('#color-name');

        // Loop through each button and add a click event listener
        colorButtons.forEach(function(button) {
            console.log(button); // Debug: log each button
            button.addEventListener('click', function(e) {
                console.log(e);           // Debug: log the event object
                console.log(e.target);    // Debug: log the clicked element
                
                // Update the color name display
                const selectedColor = e.target.id.charAt(0).toUpperCase() + e.target.id.slice(1);
                colorNameElement.textContent = `Selected Color: ${selectedColor}`;
                
                // Check the ID of the clicked button and set background color accordingly
                if (e.target.id === 'red') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'green') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'blue') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'purple') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'orange') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'yellow') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'pink') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'cyan') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'lime') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'indigo') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'brown') {
                    body.style.backgroundColor = e.target.id;
                }
                if (e.target.id === 'gray') {
                    body.style.backgroundColor = e.target.id;
                }
            });
        });