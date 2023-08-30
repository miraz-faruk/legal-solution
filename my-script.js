// Get references to the elements
const openModalButton = document.getElementById('open-modal-button');
const closeModalButton = document.getElementById('close-modal-button');
const modal = document.getElementById('modal');

// Add a click event listener to the "Open Modal" button
openModalButton.addEventListener('click', () => {
    // Remove the "hidden" class to display the modal
    modal.classList.remove('hidden');
});

// Add a click event listener to the "Close" button
closeModalButton.addEventListener('click', () => {
    // Add the "hidden" class to hide the modal
    modal.classList.add('hidden');
});
