import React from "react"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { Home } from "../Home"

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = ({}) => {
    const buttonStyle = { textTransform: "unset" }
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/home")
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                gap: "5vw",
            }}
        >
            <h1>Erro</h1>
            <h2>Caminho não encontrado</h2>
            <Button variant="contained" onClick={navigateHome} fullWidth sx={buttonStyle}>
                Voltar ao início
            </Button>
        </Box>
    )
}
