const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
  },
  darkMode: false,
  theme: {
		extend: {
			spacing: {
				'1000': '1000px',
				'700' : '700px'
			},
			colors: {
				theme: {
					DEFAULT : '#8C9B56',
					light		: '#BECB92'
				}
    	}
		},
		fontFamily: {
  		'sans': 'Montserrat, sans-serif',
  		'serif': 'Crimson Text, sans-serif',
		}
  },
  variants: {
		extend:{
			
		}
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.first-letter': {
          '&::first-letter': {
            borderBottom: '2px solid #8C9B56'
          },
        }
      }

      addUtilities(newUtilities)
    }),
		[
      "@fullhuman/postcss-purgecss",
      process.env.NODE_ENV === "production"
        ? {
            // the paths to all template files
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./components/**/*.{js,jsx,ts,tsx}",
            ],
            // function used to extract class names from the templates
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
          }
        : false,
    ],
  ],
}