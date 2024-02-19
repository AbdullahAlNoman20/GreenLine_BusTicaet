console.log("Connected");


// Button Selection and deselection

function toggleSelection(button) {
    // Toggle selected class
    button.classList.toggle('selected');

    // Update background color dynamically
    if (button.classList.contains('selected')) {
        button.style.backgroundColor = '#3498db';
        button.style.color = '#fff';
    } 
    else {
        button.style.backgroundColor = '#fff';
        button.style.color = '#333';
    }
}