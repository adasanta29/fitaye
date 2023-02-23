import Header from "../../Components/header";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { color, styled } from "@mui/system";

const Availability = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Add Availability" subtitle="Select a package and add an availability for it"/>
        </Box>
    )
}

export default Availability;