import { Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {   themePalette } from "../../config/theme.config";
import URLform from "./URLform";
import URLs from "./URLcontenedor";
import { useTheme } from '@mui/material/styles';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import SpeedIcon from '@mui/icons-material/Speed';
import BrushIcon from '@mui/icons-material/Brush';
import imagen1 from '../../images/bg-boost-desktop.svg';


interface urlItem {
    id: string;
    urlinput: string;
    urloutput: string;
    
    }
    
    


export const HomePage: React.FC<{}>=()=>{   
  
    const theme = useTheme();

    const [urls, setUrls] = useState<urlItem[]>([]);
    const showURLS = urls.length > 0;



    
    const agregarUrlcont = (url: urlItem) => {
            const urlExistente = urls.find((u) => u.urlinput === url.urlinput);
            if (urlExistente) {
            return alert(`La URL "${url.urlinput}" ya existe en el array`);

            }


          const urlActualizadas = [url, ...urls];
          setUrls(urlActualizadas);
        
      };

    const eliminarUrlcont = (id:string) => { /*vamos a tomar el id para identificar cual elemento eliminar*/
    const urlActualizadas = urls.filter(url => url.id !== id); // filtramos y el que cumpla la condición  va incluirse en el array //si el id es igual no se va incluir
    setUrls(urlActualizadas); //actualizamos el array de tareas con el setTareas

    }

   

     



    return(

        <>
            
            {/*Hero Banner*/ }
            <Container sx={{
                p: "90px 0px 150px 0px",
                [theme.breakpoints.down('lg')]: {
                    padding: '40px 20px 120px 20px',
                  },
                }} >
                <Grid container>
                    <Grid item xs={12} lg={6} sx={{
                         [theme.breakpoints.down('lg')]: {
                            padding: '0px 0px 50px 0px',
                          },
                    }} >
                        <Typography variant="h1" sx={{
                            pb: "5px",
                            [theme.breakpoints.down('lg')]: {
                                pb:"15px",
                              },

                            }}>More than just shorter links</Typography>
                        <Typography variant="subtitle1" sx={{pb: "25px"}}>Build your brand's recognitiion and get detailed insights on how your links are performing.</Typography>
                        <Button className="botongrande" >Get Started</Button>

                    </Grid>
                    <Grid item xs={12} lg={6}>
                    <img width="100%" src={require("../../images/illustration-working.svg").default} alt="Descripción de la imagen" />
                    </Grid>

                </Grid>
            </Container>

            {/* Contenedor de Shorter y Advanced Statics */}

            <Container maxWidth={false} sx={{backgroundColor:themePalette.GRAYTRANQUI,width:"100%",pt:"90px",}}>
                {/* Shorteador */}

                <Container sx={{ 
                     mt:"-160px"
                     }} >
                    <URLform onSubmit={agregarUrlcont} />

                    {showURLS ? (
                    <Container  sx={{ 
                        mt:"-16px",
                        backgroundColor:"white", 
                        width:"95%",
                        p:" 15px 0px !important",
                        display:"flex", 
                        flexDirection:"column" ,
                        justifyContent:"flex-start", 
                        borderRadius:"0px 0px 15px 15px", 
                        borderColor: "hsl(257, 27%, 26%)", 
                        borderWidth:"0px 2px 2px 2px", 
                        borderStyle:"solid",
                        [theme.breakpoints.down('lg')]: {
                            p:"20px 0px",
                          },  
                        }} >
                        {
                        urls.map((url) =>
                        <URLs 
                        key={url.id}
                        id={url.id}
                        urlinput={url.urlinput}
                        urloutput={url.urloutput}
                        eliminarUrlcont={eliminarUrlcont}
                        />
                        )
                        }
                    </Container>
                    ) : null}

                    
                </Container>

                {/*Container de Advanced Statistics */}
                <Container sx={{
                    p: "90px",
                    textAlign:"center",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    flexDirection:"column",
                    [theme.breakpoints.down('lg')]: {
                        p:"90px 16px",
                      },


                    }} >
                    <Typography variant="h2" sx={{pb:"15px"}}>Advanced Statistics</Typography>
                    <Typography variant="subtitle2" sx={{
                        width:"500px",
                        lineHeight:"1.7em",
                        [theme.breakpoints.down('lg')]: {
                            width:"100%",
                          },
                        }}>Track how your links are performing across the web with our advanced statistics dashboard.</Typography>
                    
                    {/* Contenedor Principal de los Cuadros */}
                    <Container sx={{
                        display:"flex",
                        flexDirection:"row",
                        pt:"50px",
                        zIndex:"10",
                        [theme.breakpoints.down('lg')]: {
                            flexDirection:"column",
                            pt:"100px"
                          },

                        }}>
                        
                        {/* 1er Cuadro */}
                        <Container sx={{
                              flexBasis: "33.33%",
                              boxSizing: "border-box",
                              backgroundColor:"white",
                              textAlign:"left",
                              borderRadius:"5px",
                              m:"15px",
                              mt:"-20px",
                              height:"240px",
                              display:"flex",
                              flexDirection:"column",
                              justifyContent:"left",
                              alignItems:"flex-start",
                              [theme.breakpoints.down('lg')]: {
                                paddingBottom: "36px",
                                m: "0px 0px 65px 0px",
                              },
                        }}>
                            <StackedLineChartIcon color="primary" sx={{
                                fontSize:"70px",
                                backgroundColor:"hsl(257, 27%, 26%)",
                                padding: "15px",
                                borderRadius:"35px",
                                mb:"30px",
                                mt:"-30px",
                            }}/>
                            <Typography variant="h4" sx={{pb:"20px"}}>Brand Recognition</Typography> 
                            <Typography variant="body2">Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</Typography> 
                        </Container>

                        {/* 2do Cuadro */}
                        <Container sx={{
                              flexBasis: "33.33%",
                              boxSizing: "border-box",
                              backgroundColor:"white",
                              textAlign:"left",
                              borderRadius:"5px",
                              m:"15px",
                              height:"240px",
                              display:"flex",
                              flexDirection:"column",
                              justifyContent:"left",
                              alignItems:"flex-start",
                              [theme.breakpoints.down('lg')]: {
                                paddingBottom: "36px",
                                m: "0px 0px 65px 0px",
                              },

                        

                        }}>
                            <SpeedIcon color="primary" sx={{
                                fontSize:"70px",
                                backgroundColor:"hsl(257, 27%, 26%)",
                                padding: "15px",
                                borderRadius:"35px",
                                mb:"30px",
                                mt:"-30px",
                            }}/>
                            <Typography variant="h4" sx={{pb:"20px"}}>Detailed Records</Typography> 
                            <Typography variant="body2">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</Typography> 
                        </Container>

                        {/* 3er Cuadro */}
                        <Container sx={{
                              flexBasis: "33.33%",
                              boxSizing: "border-box",
                              backgroundColor:"white",
                              textAlign:"left",
                              borderRadius:"5px",
                              m:"15px",
                              mt:"50px",
                              height:"240px",
                              display:"flex",
                              flexDirection:"column",
                              justifyContent:"left",
                              alignItems:"flex-start",
                              [theme.breakpoints.down('lg')]: {
                                paddingBottom: "36px",
                                m: "0px 0px 0px 0px",
                              },

                        

                        }}>
                            <BrushIcon color="primary" sx={{
                                fontSize:"70px",
                                backgroundColor:"hsl(257, 27%, 26%)",
                                padding: "15px",
                                borderRadius:"35px",
                                mb:"30px",
                                mt:"-30px",
                            }}/>
                            <Typography variant="h4" sx={{pb:"20px"}}>Fully Customizable</Typography> 
                            <Typography variant="body2">Improve brand awareness and content discoverability through customizable links, supercharging audience engament.</Typography> 
                        </Container>
                       
                       
                        

                    </Container>
                    {/* Linea Azul de Entre los Cuadros */}
                    <Container sx={{
                            width:"90%",
                            height:"10px",
                            backgroundColor:themePalette.CYAN,
                            mt:"-180px",
                            mb:"170px",
                            zIndex:"1"
                        }}></Container>
                    
                
                </Container>
            

                
                
            </Container>
            
            {/* Boost your links */}
            <Container maxWidth={false} sx={{
            backgroundImage:`url(${imagen1})`, 
            backgroundColor:themePalette.DVIOLET, 
            p:"50px 0px 50px 0px",
            textAlign: "center",
            }}>
                <Typography variant="h2" sx={{
                    pb:"40px",
                    color:"white",
                    }}>Boost your links today
                </Typography>
                <Button className="botongrande" >Get Started</Button>

            
            </Container>
        </>
    );
};