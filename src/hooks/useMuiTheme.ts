import { createTheme } from "@mui/material"

const colors = {
    primary: "#0074cc",
    secondary: "#f3c6d0",

    success: "#34A853",

    warning: "#ffb74d",

    background: {
        default: "#F1F1F1",
        paper: "#F1F1F1",
    },

    text: {
        primary: "#332277",
        secondary: "#E7342D",
    },
}

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["Sans Serif", "Futura Medium BT"].join(","),
        },
        palette: {
            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },

            background: {
                default: colors.background.default,
                paper: colors.background.paper,
            },

            text: {
                primary: colors.text.primary,
                secondary: colors.text.secondary,
            },

            success: {
                main: colors.success,
            },

            warning: {
                main: colors.warning,
            },
        },
    })

    return THEME
}