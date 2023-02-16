import * as React from 'react';
import { Link } from "react-router-dom";
import './Contact.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';
import { FaSchool } from "react-icons/fa";
import { AiOutlineMail , AiOutlineFacebook , AiOutlineInstagram , AiOutlineGithub } from "react-icons/ai";


export default function Contact() {
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
                strings: ['Contact'],
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
          <div className="textcenter">
            <div className="contacttext">
              <hr className="hrline"></hr>
              <p mt={2}><AiOutlineMail/> EMAIL : <a href="mailto:nontasabs@gmail.com" target="_blank">NONTASABS@GMAIL.COM</a><br></br>
                <AiOutlineFacebook/> FACEBOOK : <Link to="https://www.facebook.com/j.nontasab/" target="_blank"><a>JAMES NONTASAB</a></Link><br></br>
                <AiOutlineInstagram/> INSTAGRAM : <Link to="https://www.instagram.com/jemmyblair/" target="_blank"><a>JEMMYBLAIR</a></Link><br></br>
                <AiOutlineGithub/> GITHUB : <Link to="https://github.com/jamesmhee/" target="_blank"><a>JAMESMHEE</a></Link>
              </p>
            </div>
          </div>                                          
        </Grid>                  
      </Container>
      </Jump>
    </React.Fragment>
  );
}