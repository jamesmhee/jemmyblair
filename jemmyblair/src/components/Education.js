import * as React from 'react';
import './Education.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typewriter from 'typewriter-effect';
import Jump from 'react-reveal/Jump';
import { FaSchool } from "react-icons/fa";
import { HiOutlineDotsVertical , HiChevronDoubleDown , HiOutlineDotsHorizontal } from "react-icons/hi";

export default function Education() {
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
                strings: ['Education'],
                autoStart: true,
                loop: true,
              }}
            />
          </Box> 
          <div className="textleft">
            <div className="education1">
              <img src={require('../img/nd.png')}></img> 
              <hr className="hrline"></hr>
              <p mt={2}><FaSchool/> Grade 7 - 12<br></br>
              <HiOutlineDotsHorizontal/> WAT NUANNORADIT SCHOOL</p>            
            </div>
            <br></br>
            <center><HiOutlineDotsVertical/></center>
            <br></br>
            <div className="education">
              <img src={require('../img/kmitl.png')}></img> 
              <hr className="hrline"></hr>
              <p><FaSchool/> Year 1 - Year 4<br></br>
              <HiOutlineDotsHorizontal/> KING MONGKUT' INSTITUTE OF TECHNOLOGY
              LADKRABANG</p>            
            </div>
          </div>
        </Grid>                  
      </Container>
      </Jump>
    </React.Fragment>
  );
}