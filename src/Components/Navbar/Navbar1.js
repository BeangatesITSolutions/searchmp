"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "@/assets/img/logo.png";
import Image from "next/image";
import { pages } from "./Navlinks";
import Switch from "@mui/material/Switch";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";

import ListItemText from "@mui/material/ListItemText";

const settings = ["Login", "Logout"];

function Navbar1() {
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {pages.map((page) => (
          <ListItem key={page} disablePadding>
            <ListItemButton>
              <ListItemText
                className="font-extrabold  p-2"
                primary={page.names}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 33,
    height: 18,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 18,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(10px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 1.5,
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 15,
      height: 15,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 18 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-[#DCDF00] p-2.5 px-10 ">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Image src={Logo} alt="logo" width={75} height={75} />
          </Typography>
          {/* --------------------------------- */}

          {/* All Menu--------------- */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {/* Mobaile logo  */}
            <Image src={Logo} alt="logo" width={60} height={60} />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "end",
              gap: "50px",
              alignItems: "center",
              cursor: "pointer",
              textTransform: "uppercase",
              // border:"2px solid black",
            }}
          >
            {pages.map((page, index) => (
              <div
                className="group px-3 text-center md:cursor-pointer"
                key={index}
              >
                <span>{page.names}</span>
                {page.submenu && (
                  <div className="absolute  top-16 right-0 left-0 border-red-500 hidden group-hover:block hover:block ">
                    <div className="bg-gray-700 p-4 w-full flex justify-start  gap-8  ">
                      {page.sublinks.map((mysublinks, index) => (
                        <div key={index}>
                          <h1 className="text-lg ">{mysublinks.Head}</h1>
                          {mysublinks.sublink.map((slink, index) => (
                            <li
                              className="list-none text-sm text-white my-2.5"
                              key={index}
                            >
                              <a
                                className="hover:text-red-600"
                                href={slink.names}
                              >
                                {slink.names}
                              </a>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Switch  */}
            <Box>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography>A</Typography>
                <AntSwitch
                  defaultChecked
                  inputProps={{ "aria-label": "ant design" }}
                />
                <Typography>अ</Typography>
              </Stack>

              
            </Box>

            {/* Profile Button */}
            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
              <Tooltip>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          {/* --------------------------- */}

          {/* Toggle  */}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <Button onClick={toggleDrawer(true)}>
              <MenuIcon className="h-10 w-10 " sx={{ color: "white" }} />
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </Box>

          {/* --------------------------------- */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar1;
