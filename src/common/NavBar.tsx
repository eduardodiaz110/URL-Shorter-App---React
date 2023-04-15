import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useTheme } from '@mui/material/styles';
import { AppBar, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export const NavBar: React.FC<{}>=()=>{
    const theme = useTheme();


    const pages = ['Features', 'Pricing', 'Resources', 'Login', 'Sign Up'];

        const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
        
        const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
            setAnchorElNav(event.currentTarget);
          };
        
          const handleCloseNavMenu = () => {
            setAnchorElNav(null);
          };
      
        


    return(
        <>
        <Box  sx={{flexGrow:1, display: { xs:"none", lg:"flex"} }}>
            <AppBar position="static" sx={{ boxShadow: '0', padding:'30px 16px', backgroundColor: '#fff'}} >
                <Toolbar>
                    <Container>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                            <Stack direction="row" spacing={2}>
                                <Typography sx={{fontSize: '32px', fontWeight: 'bold', paddingRight: '30px'}}> 
                                    Shortly
                                </Typography>
                                <Button variant="text">Features</Button>
                                <Button variant="text">Pricing</Button>
                                <Button variant="text">Resources</Button>
                            </Stack>

                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <Button variant="text">Login</Button>
                                <Button variant="contained">Sign Up</Button>
                                </Stack>

                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
        </Box>


        <Container sx={{ display: { xs:"flex", lg:"none",}, p:"20px 20px" }}>
            <AppBar position="static" sx={{ boxShadow: '0', padding:'0px', backgroundColor: '#fff'}} >
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography sx={{fontSize: '32px', fontWeight: 'bold', paddingRight: '30px'}}> 
                                    Shortly
                                </Typography>
                            </Grid>
                            <Grid item>
                                        <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="secondary"
                                        sx={{
                                            borderRadius:"10px",
                                            backgroundColor:"hsl(180, 66%, 49%)",
                                            '&:hover': {
                                                backgroundColor: "hsl(180, 66%, 49%)",
                                              },
                                        }}
                                        >
                                        <MenuIcon />
                                        </IconButton>
                                        <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                        >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page}</Typography>
                                            </MenuItem>
                                        ))}
                                        </Menu>

                            </Grid>

                        </Grid>
            </AppBar>
        </Container>



        </>
    );
};