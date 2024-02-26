import React, { useState } from "react"
import { Box, Button, Grid, TextField, useTheme } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { buttonStyle } from "../../styles/buttonStyle"
import { textFieldStyle } from "../../styles/textFieldStyle"
import SaveDialog from "../../components/SaveDialog"
import { pageStyle } from "../../styles/pageStyle"

interface NewListProps {}

export const NewList: React.FC<NewListProps> = ({}) => {
    const theme = useTheme()

    const navigate = useNavigate()
    const navigateHome = () => {
        navigate("/home")
    }

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
        // console.log("Saved list. Name: ", listName, "Items:", items)
    }

    const [saveDialogOpen, setSaveDialogOpen] = useState(false)
    // const openSaveDialog = () => {
    //     setSaveDialogOpen(true)
    // }

    const liStyle = { color: theme.palette.text.primary }

    return (
        <Box sx={{ ...pageStyle, justifyContent: "space-between" }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button variant="contained" color="secondary" onClick={navigateHome} fullWidth sx={buttonStyle}>
                        Cancelar
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" onClick={resetList} fullWidth sx={buttonStyle}>
                        Limpar lista
                    </Button>
                </Grid>
            </Grid>

            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    padding: "5vw 10vw",
                    height: "50vh",
                    overflowY: "auto",
                    border: `2px solid ${theme.palette.grey[500]}`,
                }}
            >
                <ul>
                    {items.map((item, index) => (
                        <li key={index} style={liStyle}>
                            {item}
                        </li>
                    ))}
                </ul>
            </Box>

            <TextField
                placeholder="Novo item"
                variant="standard"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                fullWidth
                sx={textFieldStyle}
            />

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" onClick={handleAddItem} fullWidth sx={buttonStyle}>
                        Adicionar item
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="success"
                        onClick={() => setSaveDialogOpen(true)}
                        fullWidth
                        disabled={!items.length}
                        sx={buttonStyle}
                    >
                        Salvar lista
                    </Button>
                </Grid>
            </Grid>
            <SaveDialog open={saveDialogOpen} onClose={() => setSaveDialogOpen(false)} handleSaveList={handleSaveList} />
        </Box>
    )
}
