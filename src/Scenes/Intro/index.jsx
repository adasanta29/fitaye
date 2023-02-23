import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import { color, styled } from "@mui/system";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

const Intro = () => {
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
        textAlign: 'center', fontSize: '24px', padding: theme.spacing(4),
        color: '#fff'
    }));

    return (
        <Box m="20px">
            <Header title="INTRO" subtitle="Create a short video about yourself"/>
            <Box sx={{display: 'flex', justifyContent:'center', mt:'10%', flexDirection:'column', alignItems: 'center', gap: '2rem'}}>
                <ConHeader>
                    Upload a short video about yourself and what you specialize in (15-30 seconds)
                </ConHeader>
                
                <Input
                    type="file"
                    disableUnderline
                />
                <CTA variant="contained">
                    Upload
                </CTA>
            </Box>

        </Box>
    )
}

export default Intro;