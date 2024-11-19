
// Close button functionality
document.getElementById('close-btn').addEventListener('click', () => {
  document.getElementById('folder-gui').style.display = 'none';
});


// Select the green (maximize) button and the folder content
const maximizeBtn = document.querySelector('.maximize-btn');
const folderContent = document.querySelector('.folder-content');

// Toggle 'enlarged' class on maximize button click
maximizeBtn.addEventListener('click', function() {
    folderContent.classList.toggle('enlarged');
});
