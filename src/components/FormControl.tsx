import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateReserve from '@/components/DateReserve';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Form() {
    return (
        <FormControl variant="standard" className='bg-sky-100 space-y-5 rounded-xl border-solid border-2 border-sky-400 min-w-80' sx={{m: 2,p:3}}>
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname"/> 
            <TextField variant="standard" name="Citizen ID" label="Citizen ID" /> 
            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel>Hospital</InputLabel>
                <Select id="hospital" variant="standard" label="hospital">
                    <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
                    <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
                    <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
                </Select>
            </FormControl>
            <DateReserve/>
            <button className='text-black border border-black p-1 rounded-xl' name='Book Vaccine'>Book Vaccine</button>
        </FormControl>
    )
}