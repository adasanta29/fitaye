import React, { useState } from "react";
import Select from 'react-select';
import TimePicker from "react-time-picker";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileTimePicker } from "@mui/x-date-pickers";
import { styled, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";

import '../Components/avail_form.css';

const packageOptions = [
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Football', label: 'Football' }
];

const AvailForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('12:00');
    const [neverSelected, setNeverSelected] = useState(false);
    const [location, setLocation] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
      };
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleTimeChange = (time) => {
        setSelectedTime(time);
      };
    
      const handleNeverChange = (event) => {
        setNeverSelected(event.target.checked);
      };
    
      const handleLocationChange = (location) => {
        setLocation(location);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Selected Option:', selectedOption);
        console.log('Selected Date:', selectedDate);
        console.log('Selected Time:', selectedTime);
        console.log('Never Selected:', neverSelected);
        console.log('Location:', location);
      };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const CTA = styled(Button)(({theme}) => ({
      color: '#0c101b', backgroundColor: '#94e2cd', fontSize: '14px', fontWeight: '600', display: 'flex', width: 'auto', margin: 'auto', marginTop: '2rem',
      '&:hover': {
          color: '#94e2cd', backgroundColor: '#0c101b', borderColor: '#94e2cd'
      }
  }));

      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="option-select">Select a Package:</label>
                    <Select
                        id="option-select"
                        value={selectedOption}
                        options={packageOptions}
                        onChange={handleOptionChange}
                        className="option__select"
                        required
                    />
                </div>

                <div className="date__picker">
                    <label htmlFor="date-picker">Select a Date:</label>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                <div className="time__picker">
                    <label htmlFor="time-picker">Select a Time:</label>
                    <MobileTimePicker
                        id="time-picker"
                        value={selectedTime}
                        onChange={handleTimeChange}
                        minutesStep={30}
                        required
                    />
                </div>

                <div className="never__checkbox">
                    <label htmlFor="never-checkbox">Repeat:</label>
                    <input 
                        type="checkbox"
                        id="never-checkbox"
                        checked={neverSelected}
                        onChange={handleNeverChange}
                    />
                </div>

            </form>

            {/* submit button for form */}
            <CTA variant="contained" type="submit"> 
                  Continue
            </CTA>

        </LocalizationProvider>
      )
};

export default AvailForm;