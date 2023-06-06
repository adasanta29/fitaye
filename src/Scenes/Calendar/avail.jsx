import Header from "../../Components/header";
import AvailForm from "../../Components/avail_form";

import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { color, styled } from "@mui/system";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicker from "react-time-picker";
import Select from 'react-select';
import { useState } from "react";

const Availability = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const CTA = styled(Button)(({theme}) => ({
        color: '#0c101b', backgroundColor: '#94e2cd', fontSize: '16px', marginTop: '2rem',fontWeight: '600',
        '&:hover': {
            color: '#94e2cd', backgroundColor: '#0c101b', borderColor: '#94e2cd'
        }
    }));

    const ConHeader = styled(Box)(({theme}) => ({
        ...theme.typography.body2,
        textAlign: 'center', fontSize: '16px',
        color: '#fff', marginTop: '0.8rem'
    }));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box m="20px">
            <Header title="Add Availability" subtitle="Select a package and add an availability for it"/>
            <Box sx={{ display: "flex", justifyContent: 'center', mt: '10%', flexDirection: 'column', alignItems: 'center'}}>
                <AvailForm/>
            </Box>
        </Box>
        </LocalizationProvider>
    )
}

export default Availability;