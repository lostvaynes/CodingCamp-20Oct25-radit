welcomeSpeech();

function welcomeSpeech() {
    /// Show prompt to ask for user's name
    let name = prompt("Enter your name:");

    // Greet the user with their name
    document.getElementById('greet-name').innerHTML = `Hi ${name}, `;
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