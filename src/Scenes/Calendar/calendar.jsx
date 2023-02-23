import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Check out your schedule"/>

        </Box>
    )
}

export default Calendar;