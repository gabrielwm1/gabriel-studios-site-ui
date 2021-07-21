import { Container, Grid, Box } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HomePageComponent.styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
const HomePageComponent = () => {
  const classes = useStyles();
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        height: '100vh',
      }}>
      <div className={classes.fade}>
        <h1 className={classes.animationText}>
          Gabriel Studios creates unforgettable digital experiences.
        </h1>
      </div>
      <Box display='flex' alignItems='flex-end'>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <h3>About</h3>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h3> Ethos</h3>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h3>Clients</h3>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePageComponent;
