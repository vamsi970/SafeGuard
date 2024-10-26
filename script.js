// Function to toggle the sliding menu
function toggleMenu() {
    const slideMenu = document.getElementById("slide-menu");
    slideMenu.classList.toggle("open"); // Add or remove 'open' class to toggle visibility
}

// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.display = "none"; // Hide all sections
    });
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = "block"; // Show the selected section
    }
}

// Select the emergency button and buzzer sound element
const emergencyButton = document.getElementById("emergency-button");
const buzzerSound = document.getElementById("buzzer-sound");

// Add event listener to toggle sound on button click
emergencyButton.addEventListener("click", function() {
    // Check if the sound is currently playing
    if (buzzerSound.paused) {
        buzzerSound.play(); // Start playing if paused
        emergencyButton.classList.add("active"); // Add active class to change button appearance
    } else {
        buzzerSound.pause(); // Pause if currently playing
        buzzerSound.currentTime = 0; // Reset sound to start
        emergencyButton.classList.remove("active"); // Remove active class to revert button appearance
    }
});

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle("light-mode"); // Toggle the light mode class

    const toggleModeButton = document.getElementById("theme-toggle");
    if (document.body.classList.contains("light-mode")) {
        toggleModeButton.textContent = "Switch to Dark Mode";
    } else {
        toggleModeButton.textContent = "Switch to Light Mode";
    }

    // Update styles for the language select and buttons in light mode
    const languageSelect = document.querySelector('.language-options select');
    languageSelect.style.backgroundColor = document.body.classList.contains("light-mode") ? 'white' : '#333';
    languageSelect.style.color = document.body.classList.contains("light-mode") ? 'black' : 'white';
}

// Function to set the language based on user selection
function setLanguage(language) {
    const allElements = document.querySelectorAll('[data-lang]');
    allElements.forEach(element => {
        element.style.display = element.getAttribute('data-lang') === language ? 'block' : 'none';
    });
}

// Show settings when menu item clicked
function showSettings() {
    const settings = document.getElementById("settings");
    settings.style.display = "block"; // Show settings
    toggleMenu(); // Close the menu
}

// Function to show the about section
function showAbout() {
    alert("This app provides safety tips, emergency contacts, and self-defense information.");
}

// cyber crime page

 function handleComplaint(type) {
            // Add ripple effect
            const button = event.currentTarget;
            const ripple = document.createElement('div');
            ripple.classList.add('ripple');
            
            // Show custom alert based on type
            if (type === 'financial') {
                alert('Financial Fraud Complaint Registration Initiated');
            } else if (type === 'cyber') {
                alert('Cyber Crime Complaint Registration Initiated');
            }
        }