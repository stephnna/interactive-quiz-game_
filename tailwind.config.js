/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {     
      keyframes: {
        wrong: {
          '0%, 22%, 42%': { background: 'blue;' },
          '20%, 40%, 60%': { background: '#22074d;' },
          '62%, 100%': { background: 'crimson;' },
        },
        correct: {
              '0%, 22%, 42%': { background: 'blue;' },
              '20%, 40%, 60%': { background: '#22074d;' },
              '62%, 100%': { background: 'green;' },
            }
      },
      animation: {
        wrong: 'wrong 3s ease forwards',
        correct: 'correct 3s ease forwards',
      },
    }, 
  },
  plugins: [],
}