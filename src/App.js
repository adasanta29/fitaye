import { ColorModeContext, useMode } from './theme'
import { CssBaseline, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom";
import Topbar from "./Scenes/Global/topbar";
import Sidebar from "./Scenes/Global/sidebar";
import Dashboard from "./Scenes/Dashboard";
import Packages from "./Scenes/Packages";
import Calendar from "./Scenes/Calendar/calendar";
import Clients from "./Scenes/Clients";
import Notes from "./Scenes/Notes";
import Intro from "./Scenes/Intro";
import Verify from "./Scenes/Verify";
import Wallet from "./Scenes/Wallet";
import Invoices from "./Scenes/Invoices"
import Chats from "./Scenes/Chats";
import Add from "./Scenes/Packages/add";
import Docs from "./Scenes/Packages/docs";
import Profile from "./Scenes/Profile";
import Earnings from "./Scenes/Profile/earnings";
import Myprofile from "./Scenes/Profile/myprofile";
import Bank from "./Scenes/Profile/bankdetails";
import ProfilePackages from "./Scenes/Profile/profile-packages";
import Availability from './Scenes/Calendar/avail';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className='content'>
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              {<Route path="/packages" element={<Packages/>}/>}
              {<Route path="/calendar" element={<Calendar/>}/>}
              {<Route path="/clients" element={<Clients/>}/>}
              {<Route path="/notes" element={<Notes/>}/>}
              {<Route path="/intro" element={<Intro/>}/>}
              {<Route path="/verify" element={<Verify/>}/>}
              {<Route path="/wallet" element={<Wallet/>}/>}
              {<Route path="/invoices" element={<Invoices/>}/>}
              {<Route path="/chats" element={<Chats/>}/>}
              {<Route path="/add" element={<Add/>}/>}
              {<Route path="/docs" element={<Docs/>}/>}
              {<Route path="/profile" element={<Profile/>}/>}
              {<Route path="/earnings" element={<Earnings/>}/>}
              {<Route path="/myprofile" element={<Myprofile/>}/>}
              {<Route path="/bankdetails" element={<Bank/>}/>}
              {<Route path="/profile-packages" element={<ProfilePackages/>}/>}
              {<Route path="/avail" element={<Availability/>}/>}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
