/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-1": "var(--gray-1)",
        primaryblue: "var(--primaryblue)",
      },
      backgroundColor: {
        'primary-blue': 'var(--primary-blue, #0052FE)',
      },
      
    },
  },
  plugins: [],
};
