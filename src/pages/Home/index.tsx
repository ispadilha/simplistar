import React from "react"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const buttonStyle = { textTransform: "unset" }
    const navigate = useNavigate()
    const navigateNewList = () => {
        navigate("/new-list")
    }
    const navigateConfigLists = () => {
        navigate("/config-lists")
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
            <Button variant="contained" onClick={navigateNewList} fullWidth sx={buttonStyle}>
                Nova lista
            </Button>
            <Button variant="contained" onClick={navigateConfigLists} fullWidth sx={buttonStyle}>
                Configurar listas
            </Button>
        </Box>
    )
}
