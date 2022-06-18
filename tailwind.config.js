
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    fontFamily: {
      'mono': ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],

      'serif': ["ui-serif", "Noto Serif TC", "Noto Serif CJK TC", "serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
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
              'blockquote p:first-of-type::before': { content: 'none' },
              'blockquote p:first-of-type::after': { content: 'none' },
              h2: {
                zIndex: "10",
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
              a: {
                transition: "textDecorationThickness .3s",   
                '&:hover':{
                  textDecorationThickness: "2px",
                }
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
                transition: ".3s",
                '&:hover':{
                  backgroundColor: theme('colors.yellow.300'),
                }
              },
              table: {
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                display: "inline-block",
              },
              pre: {
                maxWidth: "100vw",
                width: "100%",
                fontSize: theme('fontSize.lg'),
                borderRadius: "unset",

              },
              iframe: { 
                paddingLeft: theme('padding.8'),
                paddingRight: theme('padding.8'),
                width: "100%",
                maxWidth: theme('maxWidth.prose')
              },
              blockquote: {
                marginLeft: theme('padding.8'),
                marginRight: theme('padding.8'),
                fontStyle: "normal",
                borderLeftWidth: "0",
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
