/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    // Add darkMode setting
  darkMode: 'class', // This allows toggling between dark and light modes with the 'dark' class

  theme: {
    // some thibest practices are added to keep in mind, if useless, they can easily be discarded
    extend: {
      // Project's theme
      width: {
        'custom-card': '347px',
        'custom-wide-chart': '437px',//budget split width
        'custom-narrow': '271px',
        'custom-width':'628px',//group expense bar
        'custom-friend-width':'570px', //mutual friends

      },

      height:{
        'custom-height-chart':'443px',//budget split height
        'custom-expense-height':'227px',//group expense bar
        'custom-friend-height':'358px',//mutual friends
        'custom-card-height':'253px'

      },

      colors: {
        "blizzard-blue": "#F4F7FE",
        'primary': "#4318FF",
        'secondary': "#2B3674",
        'title':"#A3AED0",
        'legend':"#767676",
        'highlight':"#FFF4DF",
        'alert':"#FF3636",
        'separator':"#EAEFFB",
        'green':"02B788",

        //dark mode colors using 'dark:' classes in components)
        'dark-primary': '#1a202c', // Darker primary for dark mode
        'dark-secondary': '#2d3748', // Darker secondary color
        'dark-bg': '#121212', // Background color for dark mode
        'dark-text': '#E2E8F0', // Lighter text for dark mode
        'dark-input':'#D3D3D3'//gray background for input area
      },
      // Centralizing Common Spacing (Padding/Margin). Define custom spacing values for margins, padding, or gaps. This helps keep the UI consistent and makes it easy to change spacing globally.
      spacing: {
        "section-padding": "2rem",
        "container-padding": "1.5rem",
        "69": "4.3125rem", // 69px, main component image size.
        "custom-bar":"20.5625rem" //custom width of 329px
      },
      /* Defining consistent global typography
      fontFamily: {
        "font-primary": ["Lucia Sans", "sans-serif"],
        "font-secondary": ["Arial", "sans-serif"],
      },*/
       // Defining consistent text sizes
      fontSize: {
        'header': "2.125rem",
        'subheader': "1.125rem",
        'body': "1rem",
        'legend':"0.75rem",
      },
      // If you need custom shadows for your components:
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)",
        "custom-dark": "0 10px 15px rgba(0, 0, 0, 0.5)",
        "custom": "0 18px 40px 0 rgba(112, 144, 176, 0.12)",
      },
      borderRadius: {
        'global': "16px",
        // use rounded-global for example instead of rounded-xl
      },
    },
  },
  plugins: [],
};
