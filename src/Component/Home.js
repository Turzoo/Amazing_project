
import BadgeIcon from '@mui/icons-material/Badge';

import { Avatar, Grid, Paper } from '@mui/material';
import React from 'react';
import Login from './Login';


const Home = () =>{
    const paperStyle={backgroundColor:'rgb(212 221 221)',padding:20,height:'70vh',width:380,margin:"20px auto"}
    const avatarStyle={backgroundColor:'#2abbaa'}
    return(
        
        <Grid>
          
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                <Avatar style={avatarStyle}>
                    <BadgeIcon/>
                    </Avatar>
                <h2>Amaging Project</h2>
                </Grid>
                <Login/>
               
            </Paper>
            
        </Grid>
    )
}

export default Home;