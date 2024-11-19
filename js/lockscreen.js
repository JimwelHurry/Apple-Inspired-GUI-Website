// Update the current date and time
function updateDateTime() {
  const now = new Date();
  
  // Format date (only day, month, year without "2024")
  const dateOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', dateOptions);
  
  // Format time (without continuously counting)
  const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
  const timeString = now.toLocaleTimeString('en-US', timeOptions);

  document.getElementById('date').textContent = dateString;
  document.getElementById('time').textContent = timeString;
}

// Call updateDateTime once to initialize
updateDateTime();

// Typewriter effect for password input
function startTypingAnimation() {
  const passwordInput = document.getElementById('password');
  passwordInput.value = ''; // Clear any existing value
  const password = "12345"; // The password for the lock screen
  let i = 0;

  function typeWriter() {
      if (i < password.length) {
          passwordInput.value += password.charAt(i);
          i++;
          setTimeout(typeWriter, 150); // Adjust speed here
      } else {
          // When password is completely typed, simulate a "submit" action
          setTimeout(() => {
              fadeOutIntroScreen();
          }, 500); // Wait a moment before fading out
      }
  }

  typeWriter(); // Start typing effect
}

// Fade out intro screen and reveal main content
function fadeOutIntroScreen() {
  const introScreen = document.getElementById('intro-screen');
  const mainContent = document.getElementById('main-content');
  introScreen.style.opacity = '0';
  introScreen.style.transition = 'opacity 1s ease-out';

  setTimeout(() => {
      introScreen.style.display = 'none';
      mainContent.style.display = 'block'; // Show main content after fade
  }, 1000); // Fade duration (1s)
}

// Initialize date and time display
updateDateTime();

// Automatically start typing animation when page loads
startTypingAnimation();