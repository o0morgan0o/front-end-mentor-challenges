const tailwindcss = require('tailwindcss')
module.exports = {
    purge: ['./dist/*.html'],
    content: [],
    theme: {
        extend: {
            fontFamily:{
                'sans' : ['DM Sans']

            },
            colors:
                {
                    primary: '#ec755d',
                    pale: '#f7e9dc',
                    brown: '#3b2214',
                    brownpale: '#cbc5be',
                    oceanblue: '#76b5bc',
                    yellowwhite:'#fffcf7'

                }
        },
    },
    plugins: ['postcss-preset-env', tailwindcss],
}
