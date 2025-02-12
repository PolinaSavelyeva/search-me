import { createTheme } from "@mui/material/styles";

export var theme = createTheme({})
theme = createTheme(theme, {
    palette: {
    },
    typography: {
        h1: {
            fontFamily: 'Fira Sans',
            fontWeight: 400,
            fontSize: 30,
            lineHeight: 1,
            letterSpacing: '0em',
            color: '#282626',
        },
        h2: {
            fontFamily: 'Fira Sans',
            fontWeight: 700,
            fontSize: 22,
            lineHeight: 1,
            letterSpacing: '0em',
            color: '#656EC2',
        },
        body1: {
            fontFamily: 'Montserrat',
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1,
            letterSpacing: '0em',
            color: '#282626',
        },
        body2: {
            fontFamily: 'Montserrat',
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 2.1,
            letterSpacing: '0em',
            color: '#767676',
        },
    },
}); 