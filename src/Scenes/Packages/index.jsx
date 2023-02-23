import { Box, Button, useTheme } from "@mui/material";
import React from 'react'
import Header from "../../Components/header";
import { tokens } from "../../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import GolfCourseOutlinedIcon from '@mui/icons-material/GolfCourseOutlined';
import { color, styled } from "@mui/system";
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const Packages = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Con = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? `${colors.primary[700]}` : "#000", height: '300px', borderRadius: "20px", boxShadow: "10px 10px 8px #94e2cd"
    }))

    const ConHeader = styled(Box)(({theme}) => ({
        ...theme.typography.body2,
        textAlign: 'center', fontSize: '20px', padding: theme.spacing(4),
        color: colors.greenAccent[300]
    }));

    const ConList = styled(List)(({theme}) => ({
        width: '90%', margin: 'auto', 
    }));

    const Arrow = styled(ListItemIcon)(({theme}) => ({
        justifyContent: 'flex-end'
    }));

    const CTA = styled(Button)(({theme}) => ({
        color: '#0c101b', backgroundColor: '#94e2cd', fontSize: '14px', fontWeight: '600', display: 'flex', width: '20%', margin: 'auto',
        '&:hover': {
            color: '#94e2cd', backgroundColor: '#0c101b', borderColor: '#94e2cd'
        }
    }));

    return (
        <Box m="20px">
            <Header title="PACKAGES" subtitle="Create or edit your available packages"/>
            <Box sx={{display: 'flex', justifyContent:'center', mt:'10%'}}>
                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", width: '90%', gap: '10%', justifyContent: 'center', alignItems:'center' }}>
                    <Con>
                        <ConHeader>View/Delete your Packages</ConHeader>

                        <ConList>
                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SelfImprovementOutlinedIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Yoga"/>
                                    <Arrow>
                                        <FormatAlignJustifyIcon
                                        sx={{ transform: 'rotate(90deg)'}}
                                        />
                                    </Arrow>
                                </ListItemButton>
                            </ListItem>

                            <ListItem>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <SportsSoccerOutlinedIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Football"/>
                                    <Arrow>
                                        <FormatAlignJustifyIcon
                                        sx={{ transform: 'rotate(90deg)'}}
                                        />
                                    </Arrow>
                                </ListItemButton>
                            </ListItem>

                        </ConList>
                    </Con>

                    <Con>
                        <ConHeader>Add a New Package</ConHeader>

                        <CTA href="/add" variant="contained">
                            Continue
                        </CTA>
                    </Con>
                </Box>
            </Box>
        </Box>
    )
}

export default Packages;