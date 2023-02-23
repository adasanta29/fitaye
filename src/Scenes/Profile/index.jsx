import React from 'react';
import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../Components/header';
import { tokens } from '../../theme';
import { styled } from '@mui/system';

const Profile = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Con = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? `${colors.primary[700]}` : "#000", borderRadius: "20px", boxShadow: "10px 10px 8px #94e2cd"
    }));

    const ConHeader = styled(Box)(({theme}) => ({
        ...theme.typography.body2,
        textAlign: 'center', fontSize: '20px', padding: theme.spacing(4),
        color: colors.greenAccent[300]
    }));

  return (
    <Box m="20px">
        <Header title="PROFILE" subtitle="Update, edit and view your Fitaye personal Profile"/>

        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}}>
        </Box>

    </Box>
  )
}

export default Profile;