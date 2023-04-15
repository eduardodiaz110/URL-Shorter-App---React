import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export const LoginPage: React.FC<{}>=()=>{

    type LoginType = {
        username: string;
        password: string;
    };

    const [loginData, setLoginData] = React.useState<LoginType>({
        username: "",
        password: "",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) =>{
            setLoginData({...loginData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
        e.preventDefault();
        console.log(loginData)
    }



    return(
        <Container  maxWidth="sm">
         <Grid container  alignItems="center" justifyContent="center" sx={{minHieght: "100vh"}}>
            <Grid item>
                <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
                    <Typography sx={{display: "flex", justifyContent:"center", margin:"10px 0px"}} variant= "h4">Inicar Sesión</Typography>
                    <Box onSubmit={handleSubmit} component="form" sx={{display: "flex", flexDirection:"column"}}>
                        <TextField onChange={dataLogin} required name="username"margin="normal" fullWidth type="text"  label="Email" sx={{mt:2, mb:1.5}}/>
                        <TextField onChange={dataLogin} required name="password" margin="normal" fullWidth type="password" label="Password" sx={{mt:1.5, mb:1.5}}/>
                        <Button fullWidth variant="contained" type="submit">Iniciar Sesión</Button>
                    </Box>
                </Paper>
            </Grid>
         </Grid>
        </Container>
    );
};