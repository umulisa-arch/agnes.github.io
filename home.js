window.addEventListener('load', function() {
    const homePhoto = document.querySelector('.homephoto');
    const colors = ['green', 'yellow', 'orange', 'purple', 'cyan', 'white', 'black']; // Define your colors

    let currentIndex = 0;

    setInterval(function() {
        homePhoto.style.boxShadow = `0 0 10px 5px ${colors[currentIndex]}`;
        currentIndex = (currentIndex + 1) % colors.length;
    }, 5000); // Change color every 5 seconds

    setTimeout(function() {
        homePhoto.style.boxShadow = '0 0 10px 5px rgba(0, 0, 250, 0.5)'; // Return to blue after cycling through other colors
    }, 35000); // Wait for 5 colors (25 seconds) then return to blue
});
