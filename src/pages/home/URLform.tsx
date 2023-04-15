import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { themePalette } from "../../config/theme.config";
import {v4 as uuidv4} from 'uuid'
import imagen1 from '../../images/bg-boost-desktop.svg';
import { useTheme } from '@mui/material/styles';




function URLform(props:any){


type LoginType = {
    URLI: string;
};

const theme = useTheme();

const [inputData, setInputData] = React.useState<LoginType>({
    URLI: "",
});

const seturlInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputData({...inputData, [e.target.name]:e.target.value})
}

  
const handleSubmit = (e: React.FormEvent<HTMLInputElement>) =>{
    e.preventDefault();

    const url = 'https://api.shrtco.de/v2/shorten?url='+ inputData.URLI; // cambia esta URL por la de tu API

    const urlContainer ={
        id: uuidv4(),
        urlinput: inputData.URLI,
        urloutput: "",


    }


    fetch(url)
        .then(response => response.json())
        .then(data => {

            const shortcut=data;
            urlContainer.urloutput =shortcut.result.short_link;
            props.onSubmit(urlContainer)


        })

        .catch(error => console.error(error));



}


return(

<Box onSubmit={handleSubmit} component="form" sx={{
    '& .MuiOutlinedInput-root': {borderRadius:"15px", },
    '& .MuiInputLabel-root': {display:"none" },
    zIndex:"10",
    position:"relative",
    p: "45px", 
    backgroundImage:`url(${imagen1})`, 
    backgroundColor:themePalette.DVIOLET, 
    borderRadius:"15px",
    display: "flex", 
    flexDirection:"row", 
    justifyContent:"center",
    alignItems:"center",
    [theme.breakpoints.down('lg')]: {
        p:"0px 15px 16px 15px",
        flexDirection:"column", 

      },
    }}>
<TextField  onChange={seturlInput} required name="URLI" margin="normal" fullWidth type="text"  placeholder="Ingresa Aqui el Link" sx={{
    backgroundColor:"white", 
    mb:"15px", 
    borderRadius:"15px",
    "& .MuiInputBase-root": {
        "& input": {
            textAlign: "center",
        }
    }


    }}/>
<Button sx={{
    width:"200px",
    height:"70px", 
    ml:"20px", 
    fontSize:"18px", 
    borderRadius:"15px",
    [theme.breakpoints.down('lg')]: {
        width:"100%",
        ml:"0px",
        height:"57px",
      },

    }}  className="botongrande" type="submit">Shortealo!</Button>
</Box>       

);
};

export default URLform



