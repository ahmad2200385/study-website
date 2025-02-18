// Open Login Popup
document.getElementById('loginLink').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginPopup').style.display = 'flex';
});

// Close Login Popup
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
});

// Switch to Signup Popup
document.getElementById('switchToSignup').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginPopup').style.display = 'none';
    document.getElementById('signupPopup').style.display = 'flex';
});

// Close Signup Popup
document.getElementById('closeSignupPopup').addEventListener('click', function() {
    document.getElementById('signupPopup').style.display = 'none';
});

// Switch to Login Popup
document.getElementById('switchToLogin').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('signupPopup').style.display = 'none';
    document.getElementById('loginPopup').style.display = 'flex';
});

// Login Form Submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login functionality to be implemented');
    document.getElementById('loginPopup').style.display = 'none';
});

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Signup functionality to be implemented');
    document.getElementById('signupPopup').style.display = 'none';
});

// Search Notes Functionality
function searchNotes() {
    const query = document.getElementById('searchInput').value;
    alert('Searching for: ' + query);
}

// Upload Notes Functionality
function uploadNotes() {
    alert('Upload your notes here');
}
// Open Upload Notes Popup
document.querySelector('#notes button').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('uploadNotesPopup').style.display = 'flex';
});

// Close Upload Notes Popup
document.getElementById('closeUploadPopup').addEventListener('click', function() {
    document.getElementById('uploadNotesPopup').style.display = 'none';
});

// Upload Notes Form Submission
document.getElementById('uploadNotesForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const noteTitle = document.getElementById('noteTitle').value;
    const noteDescription = document.getElementById('noteDescription').value;
    const noteFile = document.getElementById('noteFile').files[0];

    if (noteFile) {
        const formData = new FormData();
        formData.append('title', noteTitle);
        formData.append('description', noteDescription);
        formData.append('file', noteFile);

        // Here you would typically send the formData to your server using fetch or XMLHttpRequest
        // For now, we'll just log the data and show an alert
        console.log('Note Title:', noteTitle);
        console.log('Note Description:', noteDescription);
        console.log('Note File:', noteFile);

        alert('Notes uploaded successfully!');
        document.getElementById('uploadNotesPopup').style.display = 'none';
    } else {
        alert('Please select a file to upload.');
    }
});
<img src="images/image.jpg" alt="Ambassadors for NotesVilla"></img>