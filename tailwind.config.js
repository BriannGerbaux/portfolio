/** @type {import('tailwindcss').Config} */

tailwind.config = {
    content: ["./**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      fontFamily: {
        'mono': ['"JetBrains Mono"', 'mono'],
        'sans': ['"DM Sans"', 'sans'],
      },
      //screens: {
      //  'mobile': {'min': '0px', 'max': '690px'},
      //},
      extend: {
        animation: {
          scrollAnimation: "slideIn 1s ease-in-out forwards, fadeIn 1s linear forwards",
          //slideIn: "slideIn 1s ease-in forwards",
        },
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 }
          },
          slideIn: {
            "0%": { transform: 'translateY(1.5rem)' },
            "100%": { transform: 'translateY(0px)' }
          }
        },
        variants: {
          animation: ["motion-safe"]
        },
        screens: {
          'xs': '564px',
          'sm': '640px',
          'tablet': '690px',
          'md': '768px',
          'laptop': '824px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
        },
        colors: {
          grey: '#F5F5F5',
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