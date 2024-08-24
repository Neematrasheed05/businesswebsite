module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#colorcode1',   
        secondary: '#colorcode2', 
        accent: '#colorcode3',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
