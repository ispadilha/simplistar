import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { buttonStyle } from "../../styles/buttonStyle"
import { pageStyle } from "../../styles/pageStyle"

interface ConfigListsProps {}

export const ConfigLists: React.FC<ConfigListsProps> = ({}) => {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/home")
    }

    return (
        <Box sx={pageStyle}>
            <Button variant="contained" onClick={navigateHome} fullWidth sx={buttonStyle}>
                Voltar ao início
            </Button>
        </Box>
    )
}
