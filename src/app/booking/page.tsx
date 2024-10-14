import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateReserve from '@/components/DateReserve';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import getUserProfile from '@/libs/getUserProfile';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/authOptions';


export default async function Booking() {
    const session = await getServerSession(authOptions)

    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    const createdAt = new Date(profile.data.createdAt)

    return (
        <div className='flex flex-row'>
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
            <table className='flex flex-col m-5'>
                <tbody>
                    <tr>
                        <td className='min-w-36 font-semibold'>Name</td>
                        <td>{profile.data.name}</td>
                    </tr>
                    <tr><td className='font-semibold'>Email</td><td>{profile.data.email}</td></tr>
                    <tr><td className='font-semibold'>Tel.</td><td>{profile.data.tel}</td></tr>
                    <tr><td className='font-semibold'>Member Since</td><td>{createdAt.toString()}</td></tr>
                </tbody>
            </table>
        </div>
    );
}
