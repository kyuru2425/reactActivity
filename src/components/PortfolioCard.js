import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AvatarImg from '../assets/images/avatar.png'
import Developer from './Developer';
import {Link} from 'react-router-dom'


const PortfolioCard = () => {
  const divstyle ={
    display: "flex",
    justifyContent:"space-around",
    padding:"15px"
  }
  
  return (
        <div style={divstyle}>
        {Developer.map((props)=>{
          return (
            <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="200"
            image={AvatarImg}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.fullName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Link to={props.urlme}><Button size="small">Learn More About Me</Button></Link>
          </CardActions>
        </Card>
        )})}
        </div>    
  )
}

export default PortfolioCard


