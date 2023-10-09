import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const Modals = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [modelHeadline, setModelHeadline] = useState('');
    const [modelText, setModelText] = useState('');
    return (
        <>
            <div>
                <h1>E3:</h1>
                <TextField
                    id="outlined-basic"
                    label="Model headline"
                    variant="outlined"
                    onChange={(e) => setModelHeadline(e.target.value)}
                />
                <br />
                <br />
                <TextField
                    id="outlined-basic"
                    label="Model text"
                    variant="outlined"
                    onChange={(e) => setModelText(e.target.value)}
                />
                <br />
                <br />
                <Button variant="contained" onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                        <Typography
                            id="modal-modal-title"
                            variant="h6"
                            component="h2">
                            {modelHeadline}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {modelText}
                        </Typography>
                    </Box>
                </Modal>
            </div>
        </>
    );
};

export default Modals;
