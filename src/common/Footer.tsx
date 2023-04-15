import React from "react";
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import { AppBar, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export const Footer: React.FC<{}>=()=>{
    const theme = useTheme();


    


    return(
        <>
            <Container maxWidth={false} sx={{
                p:"90px 0px 90px 0px",
                backgroundColor:"#232027",
                [theme.breakpoints.down('lg')]: {
                    p:"60px 0px 60px 0px",
                },
                }}>
                <Container sx={{
                    display:"flex",
                    flexDirection:"row",
                    [theme.breakpoints.down('lg')]: {
                        flexDirection:"column",
                      },
                    }} >
                    <Container sx={{
                        flexBasis: "30%",
                        boxSizing: "border-box",
                        textAlign:"left",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"left",
                        alignItems:"flex-start",
                       
                        }}>
                        <Typography sx={{
                            fontSize: '32px', 
                            fontWeight: 'bold', 
                            paddingRight: '30px', 
                            color:"white",
                            [theme.breakpoints.down('lg')]: {
                                fontSize:"45px",
                                pb:"30px"
                              },

                            }}> 
                            Shortly
                        </Typography>
                    </Container>
                    <Container sx={{
                        flexBasis: "16.66%",
                        boxSizing: "border-box",
                        textAlign:"left",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"left",
                        alignItems:"flex-start"
                        }}>
                        <Typography variant="h6" sx={{color:"white", pb:"20px"}}> 
                            Features
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Link Shortening
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Branded Links
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px",  [theme.breakpoints.down('lg')]: {pb:"30px"},}}> 
                            Analytics
                        </Typography>                        
                    </Container> 
                    <Container sx={{
                        flexBasis: "16.66%",
                        boxSizing: "border-box",
                        textAlign:"left",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"left",
                        alignItems:"flex-start"
                        }}>
                        <Typography variant="h6" sx={{color:"white", pb:"20px"}}> 
                            Resources
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Blog
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Developers
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px",  [theme.breakpoints.down('lg')]: {pb:"30px"},}}> 
                            Support
                        </Typography>                        
                    </Container>  
                    <Container sx={{
                        flexBasis: "16.66%",
                        boxSizing: "border-box",
                        textAlign:"left",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"left",
                        alignItems:"flex-start"
                        }}>
                        <Typography variant="h6" sx={{color:"white", pb:"20px"}}> 
                            Company
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            About
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Our Team
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px"}}> 
                            Careers
                        </Typography>
                        <Typography variant="body2" sx={{pb:"10px",   [theme.breakpoints.down('lg')]: {pb:"30px"},}}> 
                            Contact
                        </Typography>                           
                    </Container>  
                    <Container sx={{
                        flexBasis: "20%",
                        boxSizing: "border-box",
                        textAlign:"left",
                        display:"flex",
                        flexDirection:"row",
                        justifyContent:"left",
                        alignItems:"flex-start",
                        color:"white",
                        }}>
                        <FacebookIcon sx={{
                            fontSize:"30px",
                            m:"5px",
                        }}/>
                        <TwitterIcon sx={{
                            fontSize:"30px",
                            m:"5px",
                        }}/>
                        <PinterestIcon sx={{
                            fontSize:"30px",
                            m:"5px",
                        }}/>
                        <InstagramIcon sx={{
                            fontSize:"30px",
                            m:"5px",
                        }}/>                                              
                    </Container>  




                </Container>
            </Container>

        </>
    );
};