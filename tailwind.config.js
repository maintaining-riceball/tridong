
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    fontFamily: {
      'sans': ["ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans TC", "Noto Sans CJK TC", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
    },
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
                fontSize: theme('fontSize.2xl'),
                position: "sticky",
                top: "var(--navbarMainHeight)",
              },
              h3: {
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
                fontSize: theme('fontSize.lg'),
                maxWidth: theme('maxWidth.prose'),
              },
              ul: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                listStylePosition: "inside",
                fontWeight: "500",
                letterSpacing: ".1rem"
              },
              ol: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                listStylePosition: "inside",
              },
              em: {
                fontStyle: "normal",
                backgroundColor: "var(--highlight)",
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textDecorationStyle: "dotted",
                textDecorationColor: theme('colors.stone.400'),
                textUnderlineOffset:"6px",
              },
              table: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                display: "inline-block",
              },
              pre: {
                fontSize: theme('fontSize.lg'),

              },
              iframe: { 
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                width: "100%",
                maxWidth: theme('maxWidth.prose')
              },
              blockquote: {
                fontStyle: "normal"
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
