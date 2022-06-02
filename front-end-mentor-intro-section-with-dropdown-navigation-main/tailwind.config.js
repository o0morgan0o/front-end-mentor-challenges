module.exports = {
    content: ['./dist/*.html'],
    theme: {
        screen: {
            'sm': {
                'max': '375px'
            },
            'md': {
                'min': '820px', 'max': '1440px'
            },
            'xl': {
                'min': '1441px'
            }
        },
        fontFamily:{
            'sans' : 'Epilogue'

        },
        extend: {
            colors: {
                'almostwhite': 'hsl(0,0%, 98%)',
                'mediumgray': 'hsl(0,0%, 41%)',
                'almostblack': 'hsl(0,0%,8%)'
            }

        },
    },
    plugins: [],
}
