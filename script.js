// Variables
const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.getElementById("hamburger");
const xIcon = document.getElementById("x-icon");
const navLinks = document.querySelectorAll(".nav__link");

//event listener
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");

  if (xIcon.style.display === "none") {
    hamburgerIcon.style.display = "none";
    xIcon.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    hamburgerIcon.style.display = "block";
    xIcon.style.display = "none";
  });
});

// Form Script

let name = document.getElementById("name");
let email = document.getElementById("email");
let comments = document.getElementById("comments");
const success = document.getElementById("success");

function sendEmail() {
  fetch("https://formsubmit.co/ajax/vkscoma@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      comments: document.getElementById("comments").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then((message) => (success.style.display = "block"))
    .catch((error) => console.log(error));
}
