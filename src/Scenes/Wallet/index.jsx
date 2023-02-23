import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import {color, styled} from "@mui/system";
import Grid from "@mui/material/Grid";


const Wallet = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const Con = styled(Box)(({theme}) => ({
        backgroundColor: theme.palette.mode === 'dark' ? `${colors.primary[700]}` : "#000", borderRadius: "20px", boxShadow: "10px 10px 8px #94e2cd", width: 'auto'
    }));

    const ConHeader = styled(Box)(({theme}) => ({
        ...theme.typography.body2,
        textAlign: 'center', fontSize: '16px', padding: theme.spacing(4),
        color: '#fff'
    }));
    return (
        <Box m="20px">
            <Header title="WALLET" subtitle="Keep a track of your earnings and expenses with Fitaye"/>
            
            
            
        </Box>
    )
}

export default Wallet;