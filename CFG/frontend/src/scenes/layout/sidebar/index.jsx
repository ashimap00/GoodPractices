/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DonutLargeOutlined,
  HelpOutlineOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  ReceiptOutlined,
  TimelineOutlined,
  WavesOutlined,
} from "@mui/icons-material";
import avatar from "../../../assets/images/avatar.png";
import logo from "../../../assets/images/logo.png";
import Item from "./Item";
import { ToggledContext } from "../../../App";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggled, setToggled } = useContext(ToggledContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: 0,
        height: "100%",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {!collapsed && (
              <Box
                display="flex"
                alignItems="center"
                gap="12px"
                sx={{ transition: ".3s ease" }}
              >
                <img
                  style={{ width: "40px", height: "40px", borderRadius: "8px" }}
                  src={logo}
                  alt="Argon"
                />
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  textTransform="capitalize"
                  color={colors.greenAccent[500]}
                >
                  BPS
                </Typography>
              </Box>
            )}
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            mb: "25px",
          }}
        >
          <Avatar
            alt="avatar"
            src={avatar}
            sx={{ width: "100px", height: "100px" }}
          />
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[100]}>
              Admin
            </Typography>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              Innovating with the Poor
            </Typography>
          </Box>
        </Box>
      )}

      <Box mb={5} pl={collapsed ? undefined : "5%"}>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Dashboard"
            path="/"
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="SHG's"
            path="/list_SHG's"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />
          <Item
        title="AdminUpload"
        path="/adminupload"
        colors={colors}
        icon={<PersonOutlined />}
      />

          <Item
            title="Trainors"
            path="/trainors"
            colors={colors}
            icon={<PersonOutlined />}
          />
          <Item
            title="Trainees"
            path="/trainees"
            colors={colors}
            icon={<PersonOutlined />}
          />
          
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
        </Typography>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Donations"
            path="/get_donations"
            colors={colors}
            icon={<PersonOutlined />}
          />
          <Item
            title="curate_modules"
            path="/Trainer_modules"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />
          <Item
            title="get_trainees"
            path="/get_trainees"
            colors={colors}
            icon={<CalendarTodayOutlined />}
          />
          <Item
            title="FAQ's Raised"
            path="/faq"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
          <Item
            title="Feedback Form"
            path="/feedback"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
          <Item
            title="LearningModule"
            path="/learning-module"
            colors={colors}
            icon={<HelpOutlineOutlined />}
          />
        </Menu>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Follow-up"
            path="/follow_ups"
            colors={colors}
            icon={<BarChartOutlined />}
          />
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideBar;
