import { Box, useTheme } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { color, styled } from "@mui/system";

import FullCalendar from "@fullcalendar/react";
import daygrid from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";

const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const CTA = styled(Button)(({theme}) => ({
        color: '#0c101b', backgroundColor: '#94e2cd', fontSize: '16px', marginTop: '2rem',fontWeight: '600',
        '&:hover': {
            color: '#94e2cd', backgroundColor: '#0c101b', borderColor: '#94e2cd'
        }, 
    }));

    return (
        <Box m="20px">
            <Header title="CALENDAR" subtitle="Check out your schedule"/>

            <FullCalendar
            plugins={[daygrid, timegrid, interaction]} 
            height={"70vh"}
            initialView="dayGridMonth"
            weekends={true}
            headerToolbar = {{
                left: "prev,next",
                center: "title",
                right: "dayGridMonth, dayGridWeek, dayGridDay"
            }}
            />

            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <CTA variant="contained" href="/avail">
                    Add Availability
                </CTA>
            </Box>

        </Box>
    )
}

export default Calendar;