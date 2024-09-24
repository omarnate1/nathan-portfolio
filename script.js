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

// Experience start dates for each technology (year, month)
const experiences = {
  html: { year: 2022, month: 9 }, // September 2022
  css: { year: 2022, month: 9 }, // September 2022
  javascript: { year: 2023, month: 6 }, // June 2023
  accessibility: { year: 2023, month: 6 }, // June 2023
  wordpress: { year: 2023, month: 6 }, // June 2023
  tailwind: { year: 2024, month: 1 }, // January 2024
  react: { year: 2024, month: 5 }, // May 2024
};

// Function to calculate and return the experience in years and months
function calculateExperience(startYear, startMonth) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // getMonth() returns 0-11, so +1

  let years = currentYear - startYear;
  let months = currentMonth - startMonth;

  // Adjust if months are negative
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

// Function to update the experience in the DOM
function updateExperience() {
  document.querySelectorAll("h2").forEach((element) => {
    let text = element.textContent.trim().toLowerCase(); // Normalize text for matching

    Object.keys(experiences).forEach((key) => {
      if (text.includes(key)) {
        const { year, month } = experiences[key];
        const { years, months } = calculateExperience(year, month);

        // Conditionally render based on the number of years
        let experienceText;
        if (years === 0) {
          experienceText = `${months} Months Experience`; // Render only months if less than a year
        } else {
          experienceText = `${years} Years`;
          if (months > 0) {
            experienceText += `, ${months} Months`;
          }
          experienceText += " Experience";
        }

        // Update the corresponding paragraph with experience
        element.querySelector("p").textContent = experienceText;
      }
    });
  });
}

// Call the function to update the DOM on page load
updateExperience();
