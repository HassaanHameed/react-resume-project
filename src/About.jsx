import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import img from "./img/hero-bg.jpg";
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container cafsdfdfsfsfs fdsfsfsfs fsdfdsfdsfsfsf sdfsdfn support. `;

export default function AutoGridNoWrap() {
  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
      <Paper sx={{ maxWidth: "100%", my: 1, mx: "auto", p: 2 }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>W</Avatar>
          </Grid>
          <Grid item xs>
            <img
              src={img}
              alt="hello"
              style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
