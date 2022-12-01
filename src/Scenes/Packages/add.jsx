import { Box, Button, useTheme, useState } from "@mui/material";
import React from 'react'
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { color, styled } from "@mui/system";
import { hover } from "@testing-library/user-event/dist/hover";
import { useFormik } from 'formik';
import { Form } from "react-router-dom";
import FormLabel from "@mui/material/FormLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControl from "@mui/material/FormControl"
import FormControlLabel  from "@mui/material/FormControlLabel"
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';


const Add = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Back = styled(Button)(({theme}) => ({
        color: '#fff', marginLeft: '42rem', marginTop: '2rem'
    }));

    const CTA2 = styled(Button)(({theme}) => ({
        color: '#0c101b', backgroundColor: '#94e2cd', fontSize: '16px', fontWeight: '600', marginTop: '1.5rem', marginLeft: '21.1rem',
        '&:hover': {
            color: '#94e2cd', backgroundColor: '#0c101b', borderColor: '#94e2cd'
        }
    }));

    return (
        <Box m="20px">
            <Header title="Add a New Sport" subtitle="Pick a Fitaye Active or Heal category"/>
            <Box sx={{display: 'flex', justifyContent:'center', mt:'10%'}}>
                <Box sx={{ display: 'block', justifyContent: 'center'}}>
                    <Box sx={{ fontSize: '32px', textAlign: 'center'}}>
                        Fitaye Active<br></br>

                        <FormControl sx={{marginTop: '3rem'}}>
                        <FormLabel></FormLabel>
                        <RadioGroup aria-labelledby="fitaye-active-radio" row >
                            <FormControlLabel value="soccer" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Soccer"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="basketball" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Basketball"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="combat-sports" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Combat Sports"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="golf" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Golf"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="fitness" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Fitness"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="tennis" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Tennis"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="dance" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Dance"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="yoga" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Yoga"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="pilates" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Pilates"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                        </RadioGroup>
                    </FormControl>

                    </Box>

                    <Box sx={{ fontSize: '32px', textAlign: 'center', marginTop: '6rem' }}>
                        Fitaye Heal<br></br>

                        <FormControl sx={{marginTop: '3rem'}}>
                        <FormLabel></FormLabel>
                        <RadioGroup aria-labelledby="fitaye-heal-radio" row >
                            <FormControlLabel value="mind" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Mind"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                            <FormControlLabel value="body" control={<Radio sx={{ color: '#94e2cd', '&.Mui-checked': {color: '#94e2cd'} }}/>} label="Body"  labelPlacement="top" sx={{ color: '#94e2cd' }}/>
                        </RadioGroup>
                    </FormControl>
                    </Box>
                    
                </Box>
            </Box>
            <Box>
                <Back href="/packages">
                    <KeyboardDoubleArrowLeftOutlinedIcon fontSize="large"/>
                </Back>

                <CTA2 href="/docs" variant="contained">
                    Continue
                </CTA2>

            </Box>
        </Box>
    )
}

export default Add;