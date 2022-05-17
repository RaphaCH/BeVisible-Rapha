module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        secondary: '#5B85AA',
        wheat: '#F5E0B7',
        vegasGold: '#D6BA73',
        etonBlue: '#8BBF9F',
        beCode: '#000407',
        beCodeLight: '#000C14',
      },
      backgroundImage: (theme) => ({
        becode: 'url("/images/logo-becode.png")',
        check: "url('/icons/check.svg')",
        checkFill: "url('/icons/check-fill.svg')",
      })
    },
  },
  plugins: [],
}
