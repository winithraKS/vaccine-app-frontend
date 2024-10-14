'use client'

import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker/>
        </LocalizationProvider>
    );
}