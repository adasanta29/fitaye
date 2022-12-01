import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import WalletOutlined from "@mui/icons-material/WalletOutlined";
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Logo from '../../Content/fitayelogo.png'

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography variant="h5">{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const[selected, setSelected] = useState("Dashboard");

    return (
        <Box
            sx={{
                "& .pro-side-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& pro-menu-item:active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    <MenuItem
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                    style={{
                        margin: "10px 0 20px 0",
                        color: colors.grey[100],
                    }}
                    >
                        {!isCollapsed && (
                            <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            >
                                <Typography variant="h3" color={colors.grey[100]}>
                                    Admin
                                </Typography>
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon/>
                                </IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img 
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src= {`../../assets/userplaceholder.jpeg`}
                                style={{cursor: "pointer", borderRadius: "50%"}}
                            />
                            </Box>

                            <Box textAlign="center">
                                <Typography 
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0"}}
                                >
                                Krishna N.
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        
                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "50px 0 15px 20px"}}>
                        </Typography>

                        <Item 
                        title="Packages"
                        to="/packages"
                        icon={<Inventory2OutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item
                        title="Calendar"
                        to="/calendar"
                        icon={<CalendarMonthOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item
                        title="Clients"
                        to="/clients"
                        icon={<GroupsOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item 
                        title="Notes"
                        to="/notes"
                        icon={<NoteAltOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "50px 0 15px 20px"}}>
                        </Typography>

                        <Item
                        title="Intro"
                        to="/intro"
                        icon={<VideoCameraFrontOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item
                        title="Verify"
                        to="/verify"
                        icon={<TaskOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item
                        title="Wallet"
                        to="/wallet"
                        icon={<AccountBalanceWalletOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />

                        <Item
                        title="Invoices"
                        to="/invoices"
                        icon={<PaymentOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}/>

                        <Item
                        title="Chats"
                        to="/chats"
                        icon={<MessageOutlinedIcon/>}
                        selected={selected}
                        setSelected={setSelected}
                        />
                    </Box>

                </Menu>

            </ProSidebar>

            
        </Box>
    );
};

export default Sidebar 