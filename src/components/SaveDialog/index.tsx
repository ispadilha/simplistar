import { Dialog, Button, TextField, Box } from "@mui/material"
import { buttonStyle } from "../../styles/buttonStyle"
import { useState } from "react"
import { textFieldStyle } from "../../styles/textFieldStyle"
import { pageStyle } from "../../styles/pageStyle"

interface SaveDialogProps {
    open: boolean
    onClose: () => void
    handleSaveList: () => void
}

const SaveDialog: React.FC<SaveDialogProps> = ({ open, onClose, handleSaveList }) => {
    const [listName, setListName] = useState<string>("Nome da lista")
    return (
        <Dialog open={open} onClose={onClose}>
            <Box sx={pageStyle}>
                <TextField variant="standard" value={listName} onChange={(e) => setListName(e.target.value)} fullWidth sx={textFieldStyle} />
                <Button variant="contained" onClick={handleSaveList} fullWidth sx={buttonStyle}>
                    Salvar lista
                </Button>
            </Box>
        </Dialog>
    )
}

export default SaveDialog
