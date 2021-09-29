import React from "react";
import { Box, Paper, Grid, Container } from "@mui/material";

const Prt = () => {
  return (
    <>
      <Container disableGutters maxWidth={false}>
        {/* first parent Grid */}
        <Grid container columns={12}>
          <Grid item xs={12} md={12} sx={{ backgroundColor: "blue" }}>
            Hello
          </Grid>
          <Grid
            container
            item
            columns={4}
            justifyContent="space-evenly"
            sx={{ backgroundColor: "red" }}
          >
            <Grid item md={1} sx={{ backgroundColor: "tan" }}>
              child 1
            </Grid>
            <Grid item md={1} sx={{ backgroundColor: "teal" }}>
              child 2
            </Grid>
            <Grid item md={1} sx={{ backgroundColor: "green" }}>
              child 2
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} sx={{ backgroundColor: "yellow" }}>
            Hello
          </Grid>
        </Grid>
        {/* Second parent Grid */}
        <Grid container columns={12}>
          <Grid item xs={12} md={6}>
            Hello
          </Grid>
          <Grid item xs={12} md={6}>
            world
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Prt;
