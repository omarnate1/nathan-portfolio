// Function to change header background color on scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    // Adjust the scroll threshold as needed
    header.classList.add("bg-scroll-blue"); // Add the class when scrolling
  } else {
    header.classList.remove("bg-scroll-blue"); // Remove the class when at the top
  }
});

// Function to open WhatsApp link when button is clicked
document.getElementById("whatsapp-button").addEventListener("click", () => {
  const phoneNumber = "+2348095793233";
  const url = `https://wa.me/${phoneNumber}`;
  window.open(url, "_blank");
});
