import Typography from 'typography';

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.666,
    googleFonts: [
        {
            name: 'Montserrat',
            styles: ["600"]
        },
        {
            name: 'Roboto',
            styles: ["400i", "400", "700"]
        },
        {
            name: "Inconsolata",
            styles: ["400"]
        }
    ],
    headerFontFamily: ['Montserrat'],
    bodyFontFamily: ['Roboto', 'sans-serif'],
})

export default typography