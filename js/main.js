// Function to open the project modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close the project modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal automatically if the user clicks/taps outside of the modal box
window.onclick = function(event) {
    // If the click happened on the background (not inside the modal content box)
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}