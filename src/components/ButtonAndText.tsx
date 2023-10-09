import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Typography } from "@mui/material";

const ButtonAndText = () => {
    const [headline, setHeadline] = useState("");
    const [text, setText] = useState("");
    const [isHidden, setHidden] = useState(true);

    const onChangeHidden = () => setHidden((prev) => !prev);

    return (
        <>
            <Typography component="h1" variant="h4">
                E1:
            </Typography>
            <Typography component="h2" variant="h5">
                {headline}
            </Typography>
            {!isHidden && (
                <Typography component="h2" variant="h5">
                    {headline}
                </Typography>
            )}
            <Stack spacing={2} direction="row">
                <Button variant="contained" onClick={() => setHeadline(text)}>
                    Contained
                </Button>
                <Button variant="contained" onClick={onChangeHidden}>
                    OnChange
                </Button>
                <TextField
                    sx={{ bgcolor: "pink" }}
                    label="Outlined"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                />
            </Stack>
        </>
    );
};

export default ButtonAndText;
