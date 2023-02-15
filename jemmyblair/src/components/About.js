import * as React from 'react';
import { Link } from "react-router-dom";
import './About.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';
import Button from '@mui/material/Button'
import { BsDownload } from "react-icons/bs";

export default function About() {
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
                strings: ['About'],
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
          <div className="about">
            <p mt={2}>Hi :) My name is Nontasab Siangchin (James) <br></br>My Birthday is 9 August 1999</p>
            <hr className="hrline"></hr>
            <Link to={{ pathname:"https://drive.google.com/file/d/15BdfsLgUl50EPd8qcF4MT3VjLnwEo8NV/view?usp=sharing" }} target="_blank" >
              <p className="download">Download my resume<br></br><BsDownload/></p> 
            </Link>
          </div>                                           
        </Grid>                  
      </Container>
      </Jump>
    </React.Fragment>
  );
}