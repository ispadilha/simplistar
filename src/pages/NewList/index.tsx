import React, { useState } from "react"
import { Box, Button, TextField, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface NewListProps {}

export const NewList: React.FC<NewListProps> = ({}) => {
    const buttonStyle = { textTransform: "unset" }
    const textFieldStyle = {
        textAlign: "center",
    }
    const theme = useTheme()
    const pStyle = { color: theme.palette.text.primary }

    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/home")
    }

    const [listName, setListName] = useState<string>("Nome da lista")
    const [items, setItems] = useState<string[]>([])
    const [newItem, setNewItem] = useState<string>("")

    const handleAddItem = () => {
        if (newItem.trim() !== "") {
            setItems([...items, newItem])
            setNewItem("")
        }
    }

    const resetList = () => {
        setItems([])
    }

    const handleSaveList = () => {
        // Perform the save list logic here
        console.log("Saved list: ", listName, items)
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
            <TextField
                variant="standard"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                fullWidth
                sx={{ ...textFieldStyle, marginBottom: "auto" }}
            />

            {!!items && (
                <Box>
                    {items.map((item, index) => (
                        <p key={index} style={pStyle}>
                            {item}
                        </p>
                    ))}
                </Box>
            )}

            <TextField variant="standard" value={newItem} onChange={(e) => setNewItem(e.target.value)} fullWidth sx={textFieldStyle} />

            <Button variant="contained" onClick={handleAddItem} fullWidth sx={buttonStyle}>
                Adicionar item
            </Button>

            <Button variant="contained" onClick={resetList} fullWidth sx={buttonStyle}>
                Limpar lista
            </Button>

            <Button variant="contained" onClick={handleSaveList} fullWidth sx={buttonStyle}>
                Salvar lista
            </Button>

            <Button variant="contained" onClick={navigateHome} fullWidth sx={buttonStyle}>
                Voltar ao início
            </Button>
        </Box>
    )
}
