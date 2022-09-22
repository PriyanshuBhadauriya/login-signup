import { TextField,Button,Box,Alert } from "@mui/material";
import {useState} from "react";
const Signup =() =>
{
    const [error,setError] =useState({
        status:false,
        msg:"",
        type:"",
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData ={
            name:data.get('name'),
            email:data.get('email'),
            mobile:data.get('mobile'),
            address:data.get('address'),
            city:data.get('city'),
            state:data.get('state'),
            pincode:data.get('pincode'),
            country:data.get('country'),
            cname:data.get('cname'),
            occupation:data.get('occupation'),
            yexperience:data.get('yexperience'),
            tc:data.get('tc')
        }
       
       if( actualData.name && actualData.email && actualData.mobile && actualData.address && actualData.city && actualData.state && actualData.pincode && actualData.country && actualData.cname && actualData.occupation  && actualData.yexperience )
       {
        console.log(actualData);
        document.getElementById('signup-form').reset()
        setError({status:true, msg:"Registration Successfull", type:'success'})    
    }else
       {
        setError({status:true, msg:"All Fields Required",type:'error'})
       }
    }
    return <>
    
    <Box component='form' noValidate  textAlign="center" id='signup-form' onSubmit={handleSubmit} sx={{mt:1, border:2,borderColor: 'primary.main',borderRadius: 5, m: 4}}>
    <h1 style={{textAlign: "center"}}>SIGNUP</h1>
    <TextField  margin='dense' required sx={{ width: '60%' }} id='name' name='name' label = 'Name' />
        <TextField  margin='normal' required sx={{ width: '60%' }} id='email' name='email' label = 'Email Address' />
        <TextField  margin='dense' required sx={{ width: '60%' }} id='mobile' name='mobile' label = 'Phone'  type='number' />
        <TextField  margin='dense' required sx={{ width: '60%' }} id='address' name='address' label = 'Address' />
        <TextField  margin='dense' required sx={{ width: '60%' }} id='city' name='city' label = 'City'type='text' />
        <TextField   margin='dense' required sx={{ width: '60%' }} id='state' name='state' label = 'State' />  
        <TextField  margin='dense' required sx={{ width: '60%' }} id='pincode' name='pincode' label = 'Pin Code' type='number' maxLength={6} />
        <TextField  margin='dense' required sx={{ width: '60%' }} id='country' name='country' label = 'Country' />
        <TextField margin='dense' required sx={{ width: '60%' }} id='cname' name='cname' label = 'Company Name' />
        <TextField  margin='dense' required sx={{ width: '60%' }} id='occupation' name='occupation' label = 'Occupation' />
        <TextField margin='dense' required sx={{ width: '60%' }} id='yexperience' name='yexperience' label = 'Year Of Experience' type='number' />
       
    <Box textAlign='center'>
    <Button type="submit" variant='contained'  sx={{ mt:3, mb:2, px:5 }}>Signup</Button>
    </Box>
 
    {error.status ?<Alert severity={error.type} sx={{mt:3}}>{error.msg}</Alert>:''}
     </Box>
    </>;
};
export default Signup;