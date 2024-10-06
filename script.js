function togglePassword() {
    const passwordField = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
    
    if (showPasswordCheckbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

function login() {
    const userType = document.getElementById('userType').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Admin credentials
    const adminCredentials = {
        admin1: 'Admin@123',
        admin2: 'AdminPass456'
    };

    // Student credentials
    const studentCredentials = {
        student1: 'Student@123',
        student2: 'StudPass456'
    };

    if (userType === 'admin') {
        if (adminCredentials[username] && adminCredentials[username] === password) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('adminDashboard').style.display = 'block';
        } else {
            alert('Invalid admin credentials');
        }
    } else if (userType === 'student') {
        if (studentCredentials[username] && studentCredentials[username] === password) {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('studentDashboard').style.display = 'block';
            document.getElementById('studentNameDisplay').innerText = username;
            
            // You could load more dynamic data here if you expand the system
        } else {
            alert('Invalid student credentials');
        }
    }
}

function logout() {
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('studentDashboard').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('showPassword').checked = false; // Reset checkbox
    togglePassword(); // Ensure password field is hidden again
}
