import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { useTheme } from "@mui/material/styles";
import CarouselAnimation from "./CarouselAnimation";
import {
  Typography,
  Grid,
  Container,
  Stack,
  useScrollTrigger,
  Zoom,
  Fab,
  Tab,
  Tabs,
} from "@mui/material";
import img2 from "./img/hero-bg.jpg";
import img from "./img/profile-img.jpg";
import TypingEffect from "./TpyingEffect";
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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CountUp from "react-countup";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import LinearProgress from "@mui/material/LinearProgress";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Practice from "./Practice";
import Practice2 from "./Practice2";
import SwipeableViews from "react-swipeable-views";
import cup4k from "./portfolio/portfolio-1.jpg";
import img3 from "./portfolio/portfolio-2.jpg";
import img4 from "./portfolio/portfolio-3.jpg";
import img5 from "./portfolio/portfolio-4.jpg";
import img6 from "./portfolio/portfolio-5.jpg";
import img7 from "./portfolio/portfolio-6.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import "./App.css";
const drawerWidth = 300;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 65 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
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
            width: "110px",
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

      <List
        sx={{
          paddingLeft: "28px",
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
          <Link href="#home" underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
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
          <Link href="#about" underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                <PersonIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </Link>
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
          <Link href="#resume" color="inherit" underline="none">
            <ListItemButton>
              <ListItemIcon>
                <DescriptionIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </Link>
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
          <Link href="#portfolio" underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                <AccountTreeIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="Portfolio" />
            </ListItemButton>
          </Link>
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
          <Link href="#contact" underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                <ContactPhoneIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItemButton>
          </Link>
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
          <Link href="#services" underline="none" color="inherit">
            <ListItemButton>
              <ListItemIcon>
                <DesignServicesIcon sx={{ color: "silver" }} />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ position: "absolute", bottom: "0", textAlign: "center" }}
      >
        <Typography variant="body2">
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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <Box sx={{ display: "flex", paddingLeft: "10px", paddingRight: "10px" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            backgroundColor: "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, color: "blue", display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
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
        <Box component="main" id="home" sx={{ flexGrow: 1, p: 0 }}>
          <Grid container columns={12}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                backgroundSize: "cover",
                backgroundColor: "blue",
                height: "100vh",
                backgroundImage: `url(${img2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "18%",
                  marginLeft: "15%",
                  fontFamily: "Raleway, sans-serif",
                  paddingRight: "5px",
                }}
              >
                Alex Smith
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  marginTop: "0",
                  marginLeft: "15%",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                I'm <TypingEffect />
              </Typography>
            </Grid>
          </Grid>
          {/* About starts here */}
          <Container sx={{ padding: "5px" }}>
            <Grid container id="about" columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  About
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Doloribus delectus perferendis earum repellat natus, enim
                  aliquid doloremque deleniti tempora repellendus. Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Fugit nesciunt
                  unde libero expedita nam
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={12}
              justifyContent="flex-start"
              alignItems="flex-start"
              columnSpacing={2}
            >
              <Grid item md={12} md={3}>
                <img
                  src={img}
                  alt="profile"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Grid>
              <Grid
                item
                md={12}
                md={9}
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography
                  variant="h4"
                  sx={{ color: "#173B6C", fontWeight: "bold" }}
                >
                  UI/UX Designer & Web Developer.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "black",
                    fontStyle: "italic",
                    marginBottom: "10px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
                <Grid container columns={9}>
                  <Grid item xs={9} md={4}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Birthday:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                1 May 1995
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Website:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                www.example.com
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Phone:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                +913-233-334-223
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              City:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                New York
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={9} md={5}>
                    <List>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Age:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                28
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Degree:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                MS Computer Science
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              PhEmailOne:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                www.examples.com
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemIcon sx={{ color: "#00A6EB" }}>
                          <KeyboardArrowRightIcon fontSize="large" />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography sx={{ fontWeight: "bold" }}>
                              Freelancer:
                              <span
                                style={{
                                  fontWeight: "normal",
                                  marginLeft: "5px",
                                }}
                              >
                                Available
                              </span>
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
          {/* About END */}

          {/* Facts starts */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Facts
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={12}
              justifyContent="center"
              alignItems="center"
              columnSpacing={2}
              sx={{ margin: "10px" }}
            >
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        <CountUp start={0} end={3000} duration={3} />
                      </Typography>
                      Happy Clients
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <AccountTreeIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        <CountUp start={0} end={557} duration={3} />
                      </Typography>
                      Projects Completed
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <SupportAgentIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {/* <CountUp start={0} end={100} duration={2} /> */}
                        24/7
                      </Typography>
                      Support
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={3}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <PersonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        <CountUp start={0} end={48} duration={3} />
                      </Typography>
                      Hard Workers
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>

          {/* Facts END */}

          {/* skill portion start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Skills
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={12}
              justifyContent="center"
              alignItems="center"
              columnSpacing={2}
              sx={{ margin: "5px", padding: "5px" }}
            >
              <Grid item xs={12} md={6}>
                HTML
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={100} />
                </Box>
                CSS
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={90} />
                </Box>
                JAVASCRIPT
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={75} />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                PHP
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={80} />
                </Box>
                WORDPRESS
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={95} />
                </Box>
                PHOTOSHOP
                <Box sx={{ width: "100%" }}>
                  <LinearProgressWithLabel value={88} />
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* skill portion END */}

          {/* Resume start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container id="resume" columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Resume
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={12}
              justifyContent="center"
              alignItems="center"
              columnSpacing={2}
              sx={{ margin: "5px", padding: "5px" }}
            >
              <Grid item xs={12} md={6}>
                <Practice />
              </Grid>
              <Grid item xs={12} md={6}>
                <Practice2 />
              </Grid>
            </Grid>
          </Container>

          {/* Resume end */}
          {/* portfolio start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container id="portfolio" columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Portfolio
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <Grid item xs={12} md={12}>
                <Tabs value={value} onChange={handleChange} centered>
                  <Tab label="All" />
                  <Tab label="App" />
                  <Tab label="Card" />
                  <Tab label="Web" />
                </Tabs>
              </Grid>
            </Grid>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <Grid container columns={12} columnSpacing={3}>
                    <Grid item xs={12} md={4}>
                      <img
                        src={cup4k}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img3}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img4}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container columns={12} columnSpacing={3}>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img5}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img6}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img7}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                  <Grid container columns={12} columnSpacing={3}>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img5}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img6}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                  <Grid container columns={12} columnSpacing={3}>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img5}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                  <Grid container columns={12} columnSpacing={3}>
                    <Grid item xs={12} md={4}>
                      <img
                        src={img6}
                        alt="cup"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Grid>
                  </Grid>
                </TabPanel>
              </SwipeableViews>
            </Grid>
          </Container>
          {/* portfolio end */}

          {/* Services start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container id="services" columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Services
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid container columns={12}>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Grid container columns={12}>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={4}>
                <List>
                  <ListItem>
                    <ListItemIcon sx={{ color: "#149DDD" }}>
                      <InsertEmoticonIcon fontSize="large" />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Happy Clients
                      </Typography>
                      <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Veritatis reprehenderit adipisci iste laborum
                        sunt, ab ut impedit. Mollitia, quo ipsam?
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Container>
          {/* Services end */}
          {/* Testominals start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Testominals
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              columns={12}
              justifyContent="center"
              sx={{ pt: "12px" }}
            >
              <Grid item xs={12} md={10}>
                <CarouselAnimation />
              </Grid>
            </Grid>
          </Container>
          {/* Testominals end */}

          {/* Contact Start */}
          <Container sx={{ padding: "5px", margin: "5px" }}>
            <Grid container id="contact" columns={12} sx={{ pt: "12px" }}>
              <Grid item md={12}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold", color: "#173B6C" }}
                >
                  Contact
                </Typography>
                <div className="randomLine"></div>
                <Typography variant="body1">
                  Magnam dolores commodi suscipit. Necessitatibus eius
                  consequatur ex aliquid fuga eum quidem. Sit sint consectetur
                  velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit
                  suscipit alias ea. Quia fugiat sit in iste officiis commodi
                  quidem hic quas.
                </Typography>
              </Grid>
            </Grid>
            <Grid container columns={12} sx={{ pt: "12px" }}>
              <Grid item xs={12} md={6}>
                <List direction="column">
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          justifyContent: "center",
                          color: "#2CA7E1",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#2CA7E1",
                          },
                          backgroundColor: "silver",
                          padding: "15px",
                          borderRadius: "100%",
                        }}
                      >
                        <InstagramIcon />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: "15px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Location:
                        </Typography>
                        <Typography variant="body2">
                          A108 Adam Street, New York, NY 535022
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          justifyContent: "center",
                          color: "#2CA7E1",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#2CA7E1",
                          },
                          backgroundColor: "silver",
                          padding: "15px",
                          borderRadius: "100%",
                        }}
                      >
                        <InstagramIcon />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: "15px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Email:
                        </Typography>
                        <Typography variant="body2">
                          abcde123456@gmail.com
                        </Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem>
                    <ListItemButton>
                      <ListItemIcon
                        sx={{
                          justifyContent: "center",
                          color: "#2CA7E1",
                          "&:hover": {
                            color: "white",
                            backgroundColor: "#2CA7E1",
                          },
                          backgroundColor: "silver",
                          padding: "15px",
                          borderRadius: "100%",
                        }}
                      >
                        <InstagramIcon />
                      </ListItemIcon>
                      <ListItemText sx={{ marginLeft: "15px" }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                          Call:
                        </Typography>
                        <Typography variant="body2">+1-234-453-234</Typography>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
                <div style={{ width: "100%" }}>
                  <iframe
                    width="100%"
                    height="400"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                  <a href="http://www.gps.ie/">sport gps</a>
                </div>
              </Grid>
              <Grid item xs={12} md={6} sx={{ padding: "20px" }}>
                <Box
                  component="form"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > :not(style)": { mb: 3, mt: 3, width: "50%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-basic"
                    label="Full Name"
                    variant="outlined"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                  />
                </Box>
                <Box
                  sx={{
                    maxWidth: 500,
                  }}
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    columns={5}
                  />
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth="true"
                    sx={{ height: "50px" }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
          {/* Contact end */}
        </Box>
      </Box>
      <ScrollTop {...props}>
        <Fab color="primary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
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
