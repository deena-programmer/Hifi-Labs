import React, { useState } from "react";
import {AppBar, Box, Divider, Drawer, IconButton,
        Toolbar, Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import logo from "./../../images/logo.png";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li> <NavLink activeClassName="active" to={"/"}> Home </NavLink> </li>
        <li> <NavLink to={"/menu"}>Menu</NavLink> </li>
        <li> <NavLink to={"/Diagnostics"}>Diagnostics</NavLink> </li>
        <li> <NavLink to={"/contact"}>Contact</NavLink> </li>
      </ul>
    </Box>
  );
  const mystyle={
    width: "45px",
    height: "22px"
  };

  const mystyle1={
    marginRight: "420px"
  };

  const mystyle2={
    marginRight: "100px",
    fontSize: "35px",
    color: "red"
  };

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "blue" }}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{mr: 2, display: { sm: "none" }, }}
              onClick={handleDrawerToggle}
            >
            
              <MenuIcon />
            </IconButton>
            <Typography
              color={"black"}
              variant="h5"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            </Typography>
            
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
            
              <ul className="navigation-menu">
              <img src={logo} alt="logo" style={mystyle}/>
                <h3 style={mystyle1}>Hifi Labs</h3>
                <h1 style={mystyle2}>Hifi Labs</h1>
                <li> <NavLink activeClassName="active" to={"/"}> Home </NavLink> </li>
                <li> <NavLink to={"/menu"}>Menu </NavLink> </li>
                <li> <NavLink to={"/Diagnostics"}>Diagnostics</NavLink> </li>
                <li> <NavLink to={"/contact"}>Contact Us </NavLink> </li>
              </ul>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-sign">
                <li> <NavLink to={"/login"}>Login </NavLink> </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "250px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;