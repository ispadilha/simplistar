import React, { useState } from "react"
import { Box, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface ConfigListsProps {}

export const ConfigLists: React.FC<ConfigListsProps> = ({}) => {
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
            <Button variant="contained" onClick={navigateHome} fullWidth sx={buttonStyle}>
                Voltar ao início
            </Button>
        </Box>
    )
}
