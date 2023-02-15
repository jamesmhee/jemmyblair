import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from 'react-reveal/Fade';
import { RiBearSmileFill } from "react-icons/ri";


export default function Footer(){
    return(
        <React.Fragment>
            <CssBaseline>
                <Fade bottom>
                    <p style={{
                        position:"fixed-bottom",
                        paddingTop:'10vh',
                        color:"gray",
                        fontSize:"0.8vh",
                    }}>this website created by jemmyblair <RiBearSmileFill/></p>
                </Fade>
            </CssBaseline>
        </React.Fragment>
    );
}