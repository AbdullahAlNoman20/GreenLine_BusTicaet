console.log("Connected");


// Button Selection and deselection

let totalButtonsCount = 39;
let seatSelectedCount = 1;

    function toggleSelection(button) {
        // Check the number of selected buttons
        const selectedButtons = document.querySelectorAll('.selected');

        if (selectedButtons.length >= 4 && !button.classList.contains('selected')) {
            // Alert and return if attempting to select more than 2 buttons
            alert('You can select up to four buttons.');
            return;
        }

        // Toggle selected class
        button.classList.toggle('selected');

        // Update background color dynamically
        if (button.classList.contains('selected')) {
            button.style.backgroundColor = '#3498db';
            button.style.color = '#fff';
        } else {
            button.style.backgroundColor = '#fff';
            button.style.color = '#333';
        }

        // Update the total button count display
        const remainingButtonsCount = totalButtonsCount - selectedButtons.length;
        document.getElementById('totalButtons').innerText = `${remainingButtonsCount}`;


        // Update the total button count display
        const remainingSeatCount = seatSelectedCount + selectedButtons.length;
        document.getElementById('seatCount').innerText = `${remainingSeatCount}`;
    }