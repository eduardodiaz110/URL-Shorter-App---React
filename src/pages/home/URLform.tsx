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

    const urlRegex = /^((ftp|http|https):\/\/)?[\w-]+(\.[\w-]+)+(\.(com|org|net|gov|mx))?(\/\S*)?$/; // Expresión regular para validar una URL sin protocolo
    const urlWithProtocol = /^((ftp|http|https):\/\/)/; // Expresión regular para verificar si la URL ya incluye un protocolo
    const url = inputData.URLI.trim(); // Eliminar espacios en blanco al principio y al final de la URL
    let finalUrl; // Variable para almacenar la URL con el protocolo agregado

    // Si la URL no incluye un protocolo, agregar "http://" como predeterminado
    if (!urlWithProtocol.test(url)) {
        finalUrl = "http://" + url;
    } else {
        finalUrl = url;
    }

    const urlIsValid = urlRegex.test(finalUrl); // Verifica si la URL es válida

    if (urlIsValid) { // Si la URL es válida, hace la solicitud fetch
        const urlContainer ={
            id: uuidv4(),
            urlinput: inputData.URLI,
            urloutput: "",
        }

        fetch('https://api.shrtco.de/v2/shorten?url=' + finalUrl)
            .then(response => response.json())
            .then(data => {
                const shortcut=data;
                urlContainer.urloutput =shortcut.result.short_link;
                props.onSubmit(urlContainer)
                setInputData({ URLI: "" }); // Limpiar el valor del campo de texto
            })
            .catch(error => console.log("La URL ingresada no es válida."));
    } else {
        alert("La URL ingresada no es válida2."); // Si la URL no es válida, muestra un mensaje de error
    }
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
<TextField  onChange={seturlInput}   value={inputData.URLI} required name="URLI" margin="normal" fullWidth type="text"  placeholder="Ingresa Aqui el Link" sx={{
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



