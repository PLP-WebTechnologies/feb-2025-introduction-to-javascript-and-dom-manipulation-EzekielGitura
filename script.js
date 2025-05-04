// Selecting DOM elements
const dynamicText = document.getElementById('dynamic-text');
const styleButton = document.getElementById('style-button');
const addElementButton = document.getElementById('add-element-button');
const removeElementButton = document.getElementById('remove-element-button');
const contentContainer = document.getElementById('content-container');

// Function to change text content dynamically
styleButton.addEventListener('click', () => {
    dynamicText.textContent = "The styles have been changed!";
    dynamicText.style.color = "#007BFF"; // Changing text color
    dynamicText.style.fontWeight = "bold"; // Making text bold
});

// Function to add a new element
addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "I'm a new element added dynamically! 🎉";
    newElement.style.color = "green";
    contentContainer.appendChild(newElement);
});

// Function to remove the last added element
removeElementButton.addEventListener('click', () => {
    if (contentContainer.lastChild) {
        contentContainer.removeChild(contentContainer.lastChild);
    } else {
        alert("No more elements to remove!");
    }
});