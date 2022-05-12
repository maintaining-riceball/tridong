module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
        transitionProperty: {
            'background': 'background',
        },

        typography: (theme) => ({
          DEFAULT: {
            css: {
              "code::before": {content: ''},
              "code::after": {content: ''},
              h2: {
                backgroundColor: theme('colors.stone.100'),
                paddingTop: theme('padding.4'),
                paddingBottom: theme('padding.4'),
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                fontWeight: 400,
                fontSize: theme('fontSize.lg'),
                position: "sticky",
                top: "var(--navbarMainHeight)",
              },
              p: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                maxWidth: theme('maxWidth.prose')
              },
              ul: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                listStylePosition: "inside",
              }
            },
          },
        }),
    }
},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
