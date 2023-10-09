import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const InputOptions = () => {
    const [age, setAge] = useState("Ten");

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <>
            <h2>Checkbox:</h2>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                "&.Mui-checked": {
                                    color: "green",
                                },
                            }}
                        />
                    }
                    label="first"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            sx={{
                                "&.Mui-checked": {
                                    color: "black",
                                },
                            }}
                        />
                    }
                    label="second"
                />
                <FormControlLabel
                    disabled
                    control={<Checkbox />}
                    label="Disabled"
                />
            </FormGroup>

            <h2>Radio:</h2>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                row
                defaultValue="female"
                name="radio-buttons-group">
                <FormControlLabel
                    value="female"
                    control={
                        <Radio
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 45,
                                },
                            }}
                        />
                    }
                    label="Female"
                />
                <FormControlLabel
                    value="male"
                    control={
                        <Radio
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 45,
                                },
                            }}
                        />
                    }
                    label="Male"
                />
                <FormControlLabel
                    value="other"
                    control={
                        <Radio
                            sx={{
                                "& .MuiSvgIcon-root": {
                                    fontSize: 45,
                                },
                            }}
                        />
                    }
                    label="Other"
                />
            </RadioGroup>

            <h2>Select:</h2>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                sx={{ bgcolor: "pink" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </>
    );
};

export default InputOptions;
