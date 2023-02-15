import * as React from 'react'
import { Link } from "react-router-dom";
import './Frame.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Typewriter from 'typewriter-effect';
import Zoom from 'react-reveal/Zoom';
import Button from '@mui/material/Button'
import FirstPage from './FirstPage';
import Menu from './Menu';

export default function Frame() {
    return (
        <React.Fragment>
          <FirstPage/>
          <Menu/>
        </React.Fragment>
      );
    }