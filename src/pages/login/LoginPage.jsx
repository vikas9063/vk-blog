import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import './style.scss'
import { AccountCircle } from '@mui/icons-material'
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (


        <Grid container justifyContent="center" >
            <Box className="login-card">
                <center> <AccountCircle color='primary' sx={{
                    fontSize: '50px'
                }} />
                    <h3 className='login-text'>Login</h3>
                </center>
                <Box className="text-field">
                    <TextField id="standard-basic" label="Username or UserId" variant="standard" className='text-width' />
                </Box>
                <Box className="text-field" >
                    <TextField id="standard-basic" label="password" variant="standard" className='text-width' />
                </Box>
                <Box className="text-field" >
                    <Button variant="outlined" endIcon={<SendIcon />}>
                        Login
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'end',
                    margin:'0px 10px'
                }}>
                    <Link to="/forgot-password">Forgot Password</Link>
                </Box>
            </Box>

        </Grid>


    )
}

export default LoginPage