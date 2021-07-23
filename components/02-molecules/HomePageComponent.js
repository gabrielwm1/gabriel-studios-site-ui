import { Container, Grid, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useStyles } from './HomePageComponent.styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Link from '@material-ui/core/Link';
const HomePageComponent = () => {
  const classes = useStyles();
  const [showEthos, setShowEthos] = useState(false);
  const [subsectionMode, setSubsectionMode] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showClients, setShowClients] = useState(false);
  const desktopView = useMediaQuery('(min-width:600px)');
  useEffect(() => {
    if (showEthos || showAbout || showClients) {
      setSubsectionMode(true);
    }
  }, [showEthos, showAbout, showClients]);
  return (
    <>
      <Container
        style={{
          // display: 'flex',
          // flexDirection: 'column',
          // justifyContent: 'space-between',
          justifyContent: 'center',
          // position: 'relative',
          minHeight: '100vh',
          height: '100vh',
        }}
      >
        <div
          style={{
            zIndex: '-1',
            top: '32%',
            position: 'relative',
            transform: 'translateY(-50%)',
          }}
          className={subsectionMode ? classes.invisible : classes.fade}
        >
          <h1 className={classes.animationText}>
            Gabriel Studios creates unforgettable digital experiences.
          </h1>
        </div>
        <Box
          // pt={6}
          // height='45vh'
          // display='flex'
          justifyContent='center'
          flexDirection='column'
          alignItems='center'
          // alignItems='flex-start'
          style={{
            // zIndex: -1,
            overFlow: 'scroll',
            position: desktopView ? 'relative' : 'absolute',
            top: '0px',
          }}
        >
          {showAbout && (
            <>
              <h2 className={classes.mainText}>
                Gabriel Studios is a full stack software development and design
                thinking studio based in Berkeley, CA.
              </h2>
              <p className={classes.mainText}>
                We work with startups, creatives, and engineers to drive
                innovative solutions.
              </p>
              <p className={classes.contact}>
                <a
                  href='mailto:gabe.wilk@gmail.com'
                  rel='noreferrer'
                  target='_blank'
                >
                  Get in touch
                </a>
              </p>
            </>
          )}
          {showEthos && (
            <>
              <p className={classes.ethosText}>
                At a certain point in my life, I realized that being overly hard
                on myself was preventing me from starting projects.
              </p>
              <p className={classes.ethosText}>
                So I spent some time thinking about things.
              </p>
              <p className={classes.ethosText}>
                And realized that this feeling was quite common.
              </p>
              <p className={classes.ethosText}>
                It takes breaking down problems into simple answers.
              </p>
              <p className={classes.ethosText}>With a good group of people.</p>
              {/* <p className={classes.ethosText}>Fueled by community.</p> */}

              {/* <p className={classes.ethosText}>
                Gabriel Studios is that tuna poke bowl that hits the spot every
                time.
              </p> */}
              {/* <p className={classes.ethosText}>
                Asking new kinds of questions, and creating simplicity out of
                complexity.
              </p> */}
            </>
          )}
          {showClients && (
            <>
              <Box>
                <h2 className={classes.mainText}>
                  <a
                    href='https://cucoloris.pictures/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    CUCOLORIS PICTURES
                  </a>
                </h2>
                {/* <h2 className={classes.mainText}>
                  <a
                    href='https://pineappleworkshop.com/'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Pineapple Workshop
                  </a>
                </h2> */}
              </Box>

              <h2></h2>
            </>
          )}
        </Box>
      </Container>
      <Box
        style={{
          position: 'absolute',
          // top: '70%',
          bottom: '5px',
          width: '100%',
        }}
      >
        <Grid container>
          <Grid item xs={4} sm={4}>
            <h3
              className={classes.footerTitle}
              onClick={() => {
                setShowAbout(false);
                setShowEthos(false);
                setShowClients(false);
                setSubsectionMode(false);
              }}
            >
              Home
            </h3>
          </Grid>
          <Grid item xs={4} sm={4}>
            <h3
              className={classes.footerTitle}
              onClick={() => {
                setShowAbout(true);
                setShowEthos(false);
                setShowClients(false);
              }}
            >
              About
            </h3>
          </Grid>
          {/* <Grid item xs={3} sm={3}>
            <h3
              className={classes.footerTitle}
              onClick={() => {
                setShowAbout(false);
                setShowClients(false);
                setShowEthos(true);
              }}
            >
              Ethos
            </h3>
          </Grid> */}
          <Grid item xs={4} sm={4}>
            <h3
              className={classes.footerTitle}
              onClick={() => {
                setShowAbout(false);
                setShowEthos(false);
                setShowClients(true);
              }}
            >
              Clients
            </h3>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomePageComponent;
