// CONTACT US FORM
"use strict";
// getting form values when form submission to the variable form
const form = document.querySelector("#contact-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // variable declarations
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const message = document.querySelector("#message").value;
    // Validate the form fields
    if (!name || !email || !message || !phone) {
        alert("Please fill in all fields.");
        return;
    }
    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    // If the form is valid, submit it
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("message", message);
    // Clear form
    form.reset();
});
