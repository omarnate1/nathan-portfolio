/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neon-green": "#52ffa8",
        "scroll-blue": "#0000FF",
      },

      boxShadow: {
        "neon-green": "0 0 20px 5px rgba(82, 255, 168, 0.8)", // Adjust as needed for glow effect
      },
      backgroundColor: {
        "scroll-blue": "#0000ff", // Replace with your blue color
      },
    },
  },
  plugins: [],
};
