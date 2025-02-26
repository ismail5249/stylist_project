document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".custom-navbar");
    const scrollToTop = document.createElement("button");
    scrollToTop.id = "scrollToTop";
    scrollToTop.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    document.body.appendChild(scrollToTop);
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("fixed");
        scrollToTop.style.display = "block"; // Show the button
      } else {
        navbar.classList.remove("fixed");
        scrollToTop.style.display = "none"; // Hide the button
      }
    });
  
    // Scroll to Top functionality
    scrollToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  
document.getElementById('a2').style.display = "none";
setTimeout(function () {
  document.getElementById('a1').style.display = "none";
  document.getElementById('a2').style.display = "block";
}, 1500)


document.getElementById("contact-form").addEventListener("submit", function(event) {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  // Check for empty fields
  if (!name || !email || !subject || !message) {
      alert("Please fill out all the fields.");
      event.preventDefault();
  }
});

   



