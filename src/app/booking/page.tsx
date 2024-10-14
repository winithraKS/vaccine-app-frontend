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
import Form from '@/components/FormControl';


export default async function Booking() {
    const session = await getServerSession(authOptions)

    if(!session || !session.user.token) return (<Form/>)

    const profile = await getUserProfile(session.user.token)
    const createdAt = new Date(profile.data.createdAt)

    return (
        <div className='flex flex-row'>
            <Form/>
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
