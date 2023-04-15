import { Button, Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CancelIcon from '@mui/icons-material/Cancel';
import { themePalette } from "../../config/theme.config";

interface URLData {
    id: string;
    urlinput: string;
    urloutput: string;
    eliminarUrlcont: (id: string) => void;


  }
  

function URLs({id, urlinput, urloutput, eliminarUrlcont}: URLData): JSX.Element {
    const theme = useTheme();


    return (
        <>
            <Container sx={{
                p:"15px 20px", 
                borderWidth:"1px 0px 0px 0px", 
                borderStyle:"solid", 
                borderColor:"#00000085"
                }}>
                <Grid container >
                    <Grid item xs={12} lg={5} sx={{
                        pr:"40px", 
                        width:"40%",
                        [theme.breakpoints.down('lg')]: {
                            pb:"15px",
                          },                    
                        }}>
                        <Typography variant="h6">URL:</Typography>
                        <Typography>{urlinput}</Typography>
                    </Grid>
                    <Grid  xs={12} lg={5} item>
                        <Typography variant="h6" sx={{ 
                            width:"60%"
                            }}>
                            Shortcut:</Typography>
                        <Typography>{urloutput}</Typography>
                    </Grid>
                    <Grid  xs={12} lg={2} item sx={{
                        textAlign:"right",
                        [theme.breakpoints.down('lg')]: {
                            mt:"-125px",
                          },

                        }}>
                        
                        <CancelIcon onClick={()=> eliminarUrlcont(id)} sx={{
                            color:themePalette.CYAN,
                            fontSize:"34px",
                        }}/>

                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default URLs;
