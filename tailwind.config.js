const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ['./components/**/*.js', './pages/**/*.js'],
  },
  darkMode: false,
  theme: {
		extend: {
			spacing: {
				'wide': '1024px',
				'norm' : '680px'
			},
			colors: {
				theme: {
					DEFAULT : '#8C9B56',
					light		: '#BECB92'
				},
				gray: colors.trueGray
    	}
		},
		fontFamily: {
  		'sans': 'Montserrat, sans-serif',
  		'serif': 'Crimson Text, sans-serif',
		}
  },
  variants: {
		extend:{
			gradientColorStops: ['group-hover']
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
    })
  ],
}