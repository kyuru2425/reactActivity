import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Greetings from './Greetings';
import { Link } from 'react-router-dom'
import styled from 'styled-components'




let Header = () => {
  let person={
    fName:"Franco", lName:"Pacifico"
  };
  const divstyle = {
    display: "flex",
    flexDirection:"row"
  };
  const Navlist = styled.a`
    text-decoration: none;
  `;
  const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin: 1rem;
    position relative;
    &:hover, &:focus {
      color: yellow;
    }
    &:active{
      color: red;
    }
  `;

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Company FGP
                </Typography>
                <Greetings firstName={person.fName} lastName={person.lName}/>
                <Navlist>
                  <StyledLink to="/"><Button color="inherit">Home</Button></StyledLink>
                  <StyledLink to="/aboutus"><Button color="inherit">About Us</Button></StyledLink>
                  <StyledLink to="/activity"><Button color="inherit">Activity</Button></StyledLink>
                  <StyledLink to="/portfolio"><Button color="inherit">Portfolio</Button></StyledLink>
                  <StyledLink to="/hook"><Button color="inherit">Hooks</Button></StyledLink>
                  <StyledLink to="/contactus"><Button color="inherit">Contact Us</Button></StyledLink>
                  <StyledLink to="/codingjournal"><Button color="inherit">Coding Journal</Button></StyledLink>

                </Navlist>
            </Toolbar>
          </AppBar>
        </Box>
      );
}
export default Header