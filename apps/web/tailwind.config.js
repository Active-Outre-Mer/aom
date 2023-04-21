// tailwind config is required for editor support

const sharedConfig = require("tailwind-config/tailwind.config.js");
/**@type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          inter: ["var(--font-sans)", "Segoe UI"],
          heading: ["var(--font-heading)"]
        }
      }
    }
  }
};
