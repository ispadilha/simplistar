import React from "react"
import { Box, Button, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { buttonStyle } from "../../styles/buttonStyle"
import { pageStyle } from "../../styles/pageStyle"

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
    const theme = useTheme()
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/home")
    }

    return (
        <Box sx={{ ...pageStyle, color: theme.palette.text.secondary }}>
            <h1>Erro</h1>
            <p>Caminho não encontrado</p>
            <Button variant="contained" onClick={navigateHome} fullWidth sx={buttonStyle}>
                Voltar ao início
            </Button>
        </Box>
    )
}
