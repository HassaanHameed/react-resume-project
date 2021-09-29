import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import img from "./img/profile-img.jpg";
import img2 from "./img/hero-bg.jpg";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Typewriter from "typewriter-effect/dist/core";
import TypingEffect from "./TpyingEffect";
import About from "./About";
const drawerWidth = 300;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      style={{
        height: "100%",
        backgroundColor: "#040B14",
        color: "#A8A9B4",
        justifyContent: "center",
        position: "static",
        float: "right",
      }}
    >
      <Container>
        <Grid
          sx={{ marginTop: "15px" }}
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <img
            src={img}
            alt="profile"
            style={{
              width: "105px",
              display: "block",
              border: "8px solid #2C2F3F",
              borderRadius: "50%",
            }}
          />
          <Typography
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "10px",
              fontSize: "25px",
            }}
          >
            Alex Smith
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            mt={2}
            sx={{
              color: "white",
            }}
          >
            <TwitterIcon
              sx={{
                "&:hover": {
                  color: "#1DA1F2",
                },
              }}
            />

            <InstagramIcon
              sx={{
                "&:hover": {
                  color: "pink",
                },
              }}
            />

            <FacebookIcon
              sx={{
                "&:hover": {
                  color: "#4267B2",
                },
              }}
            />

            <LinkedInIcon
              sx={{
                "&:hover": {
                  color: "#2867B2",
                },
              }}
            />

            <InstagramIcon
              sx={{
                "&:hover": {
                  color: "pink",
                },
              }}
            />
          </Stack>
        </Grid>
      </Container>
      {/* List start here */}
      <List
        sx={{
          paddingLeft: "25px",
          marginTop: "24px",
        }}
      >
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <PersonIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DescriptionIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <AccountTreeIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <ContactPhoneIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            color: "grey",
            "&:hover": {
              color: "white",
            },
          }}
        >
          <ListItemButton>
            <ListItemIcon>
              <DesignServicesIcon sx={{ color: "silver" }} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItemButton>
        </ListItem>
      </List>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "0", textAlign: "center" }}
      >
        <Typography variant="body1">
          &copy; Copyright{" "}
          <span style={{ fontWeight: "bold", color: "white" }}>iPortfolio</span>
          <br />
          Designed by
          <span style={{ color: "#149DDD" }}> BootstrapMade</span>
        </Typography>
      </Grid>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex", position: "relative" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: "none", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: "100vh",
            backgroundImage: `url(${img2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              marginTop: "18%",
              marginLeft: "15%",
              fontFamily: "Raleway, sans-serif",
            }}
          >
            Alex smith
            <Grid
              container
              direction="row"
              columnSpacing={0}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid xs={12} md={1}>
                <span style={{ fontSize: "35px" }}>I'm</span>
              </Grid>
              <Grid xs={12} md={3}>
                <TypingEffect />
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </Box>
      <Box></Box>
    </>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
