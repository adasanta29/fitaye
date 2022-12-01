import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../Components/header";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../Data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const Clients = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell" },
        { field: "age", headerName: "Age", type: "number", headerAlign: "left",  align: "left" },
        { field: "phone", headerName: "Phone Number", flex: 1 },
        { field: "email", headerName: "Email", flex: 1 },
        { field: "class", headerName: "Class", flex: 1 },
        /**Type, */
        { field: "type", headerName: "Type", flex: 1,
          renderCell: ({ row: { type }}) => {
            return (
                <Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor= {
                        type === "Private" && colors.greenAccent[900] || type === "Semi-Private" && colors.greenAccent[800] || type === "Group" && colors.greenAccent[700]
                    }
                    borderRadius="4px"
                >
                    {type ==="Private" && <PersonOutlinedIcon/>}
                    {type ==="Semi-Private" && <PeopleAltOutlinedIcon/>}
                    {type ==="Group" && <GroupsOutlinedIcon/>}
                    
                    <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                        {type}
                    </Typography>
                </Box>
            )
          }
        }
    ];

    return (
        <Box m="20px">
            <Header title="CLIENTS" subtitle="View and update your clientele information"/>
            <Box m="40px 0 0 0" height="75vh" sx={{
                "& .MuiDataGrid-root": {
                    border: "none"
                },
                "& .MuiDataGrid-cell": {
                    borderColor: colors.blueAccent[700]
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300]
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none"
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[600]
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700]
                },
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },
            }}>
                <DataGrid rows={mockDataTeam} columns={columns} components={{ Toolbar: GridToolbar }} />
            </Box>
        </Box>
    )
}

export default Clients;