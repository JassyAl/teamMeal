import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 150,
            color: "white",
            backgroundColor: "#404040",
        },
    },
};

const names = [
    'dairy',
    'egg',
    'gluten',
    'grain',
    'peanut',
    'seafood',
    'shellfish',
    'soy',
    'tree Nut',
    'wheat'
];

function Allergies({ allergen, setAllergen }) {
    return (
        <div>
            <FormControl sx={{
                width: 150, height: '35px'
            }}>
                <InputLabel sx={{
                    color: "white",
                    fontSize: "20px",
                    height: '35px',
                    mt: "-15px"

                }} id="allergens">allergies</InputLabel>
                <Select
                    sx={{
                        color: "white",
                        bgcolor: "#404040",
                        height: "35px",
                        fontSize: "18px",
                        border: "2px solid black"
                    }}
                    labelId="allergens"
                    id="allergens"
                    multiple="true"
                    value={allergen}
                    onChange={(e) => {
                        const {
                            target: { value },
                        } = e;
                        setAllergen(
                            typeof value === 'string' ? value.split(',') : value,
                        );
                    }}
                    //input={<OutlinedInput label="allergies" input="white" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox sx={{ color: 'white' }} checked={allergen.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default Allergies