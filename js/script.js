welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hallo ${name} nice to meet you !! `;
}
// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Show scrool btn when scroll down
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});

/// Function to validate form inputs
function validateForm() {
    /// Get form input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('subject').value;

    /// Check if any field is empty
    if (name === "" || email === "" || message === "") {
        /// Show alert if any field is empty
        alert("All fields are required!");
    } else {
        /// Show success message
        alert(`Thank you ${name}, your message has been submitted successfully!`);
    }
}