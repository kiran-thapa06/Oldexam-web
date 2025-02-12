document.querySelectorAll('.clickable-image').forEach(image => {
    image.addEventListener('click', function() {
        let imageId = this.getAttribute('data-id');
        sessionStorage.setItem('selectedImage', imageId);
        document.getElementById('loginBlock').style.display = 'block';
    });
});

function authenticate(role) {
    let imageId = sessionStorage.getItem('selectedImage');
    let passKeys = {
        "1": { student: "stu123", teacher: "teach123" },
        "2": { student: "stu234", teacher: "teach234" },
        "3": { student: "stu345", teacher: "teach345" },
        "4": { student: "stu456", teacher: "teach456" },
        "5": { student: "stu567", teacher: "teach567" }
    };

    let enteredKey = document.getElementById('passKey').value;
    let correctKey = passKeys[imageId][role];

    if (enteredKey === correctKey) {
        sessionStorage.setItem('userRole', role);  // Store role for access control
        window.location.href = 'oldexam1.html';   // Redirect to the next page
    } else {
        document.getElementById('errorMsg').textContent = "Incorrect pass key!";
    }
}

function closeLogin() {
    document.getElementById('loginBlock').style.display = 'none';
}
