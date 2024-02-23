import React from "react"
import { Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { buttonStyle } from "../../styles/buttonStyle"
import { pageStyle } from "../../styles/pageStyle"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()
    const navigateNewList = () => {
        navigate("/new-list")
    }
    const navigateConfigLists = () => {
        navigate("/config-lists")
    }

    return (
        <Box sx={pageStyle}>
            <Button variant="contained" onClick={navigateNewList} fullWidth sx={buttonStyle}>
                Nova lista
            </Button>
            <Button variant="contained" onClick={navigateConfigLists} fullWidth sx={buttonStyle}>
                Configurar listas
            </Button>
        </Box>
    )
}
