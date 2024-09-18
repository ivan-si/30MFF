const video = document.getElementById('videoElement');
const aboutText = document.getElementById('aboutText');

// Hide the 'aboutText' when the video starts playing
video.addEventListener('play', function () {
    aboutText.classList.add('hidden');
});

// Show About text when video pauses
video.addEventListener('pause', function () {
    aboutText.classList.remove('hidden');
});

// Hide About text when video ends
video.addEventListener('ended', function () {
    aboutText.classList.add('hidden');
});

// Function to remove the phone container
function hidePhoneContainer(containerId) {
    const container = document.getElementById(containerId);
    container.style.transition = "all 0.3s ease"; // Add transition for smooth collapsing
    container.style.height = "0"; // Collapse height
    container.style.overflow = "hidden"; // Hide content
    container.style.padding = "0"; // Remove padding
    setTimeout(() => container.remove(), 300); // Fully remove after transition
}

// Remove the first smartphone container when 'Notification' button is clicked
document.getElementById('notificationButton1').addEventListener('click', function () {
    hidePhoneContainer('smartphoneContainer1');
});

// Remove the second smartphone container when 'Dismiss Notification' button is clicked
document.getElementById('notificationButton2').addEventListener('click', function () {
    hidePhoneContainer('smartphoneContainer2');
});

const toggleButton = document.getElementById('toggleButton');
const hiddenSection = document.getElementById('hiddenSection');

toggleButton.addEventListener('click', function () {
    if (hiddenSection.style.display === 'none' || hiddenSection.style.display === '') {
        hiddenSection.style.display = 'block';
        toggleButton.textContent = 'Hide Video'; // Change button text
    } else {
        hiddenSection.style.display = 'none';
        toggleButton.textContent = 'Show Video'; // Change button text
    }
});