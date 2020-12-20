const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [],
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
  ],
}