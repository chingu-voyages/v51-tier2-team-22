/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // some thibest practices are added to keep in mind, if useless, they can easily be discarded
    extend: {
      // Project's theme
      colors: {
        "blizzard-blue": "#eefafc",
        'primary': "#1D4ED8",
        'secondary': "#2B3674",
      },
      // Centralizing Common Spacing (Padding/Margin). Define custom spacing values for margins, padding, or gaps. This helps keep the UI consistent and makes it easy to change spacing globally.
      spacing: {
        "section-padding": "2rem",
        "container-padding": "1.5rem",
      },
      // Defining consistent global typography
      fontFamily: {
        "font-primary": ["Lucia Sans", "sans-serif"],
        "font-secondary": ["Arial", "sans-serif"],
      },
       // Defining consistent text sizes
      fontSize: {
        'header': "2rem",
        'subheader': "1.5rem",
        'body': "1rem",
      },
      // If you need custom shadows for your components:
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.5)",
      },
      borderRadius: {
        'global': "10px",
        // use rounded-global for example instead of rounded-xl
      },
    },
  },
  plugins: [],
};
