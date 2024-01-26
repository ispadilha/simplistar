import { ThemeProvider } from "@mui/material"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import { Routes } from "./Routes"

function App() {
    const theme = useMuiTheme()

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
