/** @type {import('tailwindcss').Config} */

tailwind.config = {
    content: ["./**/*.{html,js}"],
    theme: {
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'mono'],
        'sans': ['"DM Sans"', 'sans'],
      },
      //screens: {
      //  'mobile': {'min': '0px', 'max': '690px'},
      //},
      extend: {
        screens: {
          'sm': '640px',
          'tablet': '690px',
          'md': '768px',
          'laptop': '824px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        colors: {
          lightblack: '#181818',
          darkblack: '#000000',
          green: '#9BDDFF',
          darkblue: '#4D4DFF',
          lightblue: '#00BFFF',
          lightgrey: '#D8D8D8',
          blue: '#0066FF',
        }
      }
    }
  }