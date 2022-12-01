import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";

const Wallet = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Wallet" subtitle="Keep a track of your earnings and expenses with Fitaye"/>

        </Box>
    )
}

export default Wallet;