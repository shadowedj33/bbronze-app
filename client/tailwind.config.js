/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3139de',
        lblue: '#83a8fc',
        mblue: '#6693fa',
        dblue: '#1b3980',
        mbrown: '#3b3333',
        lbrown: '#5c5050',
        dbrown: '#242020',
      },
      fontFamily: {
        asap: "var(--font-asap)",
        mplus: "var(--font-mplus)",
      },
    },
  },
  plugins: [],
}