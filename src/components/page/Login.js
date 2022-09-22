import {TextField, Button, Box,Alert} from '@mui/material';

import {useState} from "react";

const Login =() => {
    const [error,setError] =useState({
        status:false,
        msg:"",
        type:""
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData ={
            email:data.get('email'),
            password:data.get('password'),
        }
       
       if(actualData.email && actualData.password)
       {
        console.log(actualData);
        document.getElementById('login-form').reset()
        setError({status:true, msg:"Login Success", type:'success'})
    
       }else
       {
        setError({status:true, msg:"All Fields Required",type:'error'})
       }
    }
    return <>
    <Box component='form' noValidate  textAlign="center" id='login-form' onSubmit={handleSubmit} sx={{mt:1, border:2,borderColor: 'primary.main',borderRadius: 5, m: 4}}>
    <h1 style={{textAlign: "center"}}>LOGIN</h1>
        <TextField  margin='dense' required sx={{ width: '60%' }} id='email' name='email' label = 'Email Address' />
        <TextField margin='dense' required sx={{ width: '60%' }} id='password' name='password' label = 'Password' type='password' />
    <Box textAlign='center'>
    <Button type="submit" variant='contained' sx={{ mt:3, mb:2, px:5 }}>Login</Button>
    </Box>
    
    {error.status ?<Alert severity={error.type} sx={{mt:3}}>{error.msg}</Alert>:''}
     </Box>
    
    </>;
};
export default Login;
