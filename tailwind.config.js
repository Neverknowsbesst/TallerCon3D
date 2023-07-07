module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors :{
        
          customGradientStart: '#88bdbc',
          customGradientEnd: '#112d32',
          customGradientOtro: '#254e58',
          customGradientOtro2: '#379683',
      },
    },
  },
  plugins: [],
}