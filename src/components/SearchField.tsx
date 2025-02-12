import TextField from "@mui/material/TextField";
import { theme } from "../Theme";
import { ShadowBox } from "./ShadowBox";
import { useState } from "react";
// import { Button } from "@mui/material";

export default function SearchField() {
    const [input, setInput] = useState('');

    // const handleClick = () => {
    //     console.log(input);
    // };
    return (
        <ShadowBox
            sx={{ width: "100%", maxWidth: "626px", }}
            boxSizing="border-box"
            padding="19px 25px 19px 25px"
        >
            <TextField
                onChange={(event) => { setInput(event.target.value) }}
                variant="standard"
                placeholder="Search characters..."
                autoFocus
                fullWidth
                slotProps={{
                    input: {
                        disableUnderline: true,
                    },
                }}
                sx={{
                    '& input::placeholder': { ...theme.typography.h2, opacity: "100%" },
                    '.MuiInputBase-input': { ...theme.typography.h2, color: 'transparent', textShadow: '0 0 0 #656EC2', padding: 0 },
                }} />
            {/* <Button onClick={handleClick}>Check</Button> */}

        </ShadowBox>);
}
