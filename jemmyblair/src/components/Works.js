import * as React from 'react';
import { Link } from "react-router-dom";
import './Works.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';
import Button from '@mui/material/Button'


export default function Works() {
  return (
    <React.Fragment>
      <Jump left>    
      <CssBaseline />   
      <Container maxWidth="lg">       
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '80vh' }}>            
          <Box item sx={{
                marginTop: '5px',
                padding: '10px',
                fontSize: '2vw'          
              }}>
            <Typewriter
              className="tw-1"
              options={{
                strings: ['Works'],
                autoStart: true,
                loop: true,
              }}
            />
          </Box> 
          <Grid item xs={2} 
            sx={{
              marginTop: '20px',
              position: 'sticky',
              left: '50%',
              transform: 'translate(-50%, 0)',
            }}
          >
          </Grid>        
          <p mt={2} className="name anim-typewriter">
                  Works
          </p>                                           
        </Grid>                  
      </Container>
      </Jump>
    </React.Fragment>
  );
}