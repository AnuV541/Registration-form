function validateForm() {
    const form = document.getElementById('registration-form');
    const requiredInputs = form.querySelectorAll('[required]');
    for (let input of requiredInputs) {
        if (!input.value.trim()) {
            alert("Please fill out all required fields.");
            return false;
        }
    }

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    if (password !== confirmPassword) {
        alert("Passwords do not match. Please enter the same password.");
        return false;
    } else {
        alert("Form submitted!");
        return true;
    }
}
