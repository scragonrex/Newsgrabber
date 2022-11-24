import styled from '@emotion/styled';
import { MenuRounded } from '@mui/icons-material';
import { AppBar, Box, Divider, Drawer, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { Link } from "react-router-dom";
const NavBar = (props)=> {

  const Item=styled(Link)(({theme})=>
  (
    {
      textDecoration:'none',
      fontSize:"1.2rem",
      color:'white',
      padding:'6px',
      transition:'0.4s',
      borderRadius:"5px",
       "&:hover": {
             backgroundColor:"white",
         borderRadius:"5px",
         color:'#0d6efd',
         cursor: "pointer",
        //  fontWeight:'bold'
         },
  }
  ));

  const drawerWidth = 240;
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const ItemEls=(
    <>
    <Item to='/' aria-current="page">Home</Item>
         <Item to='/business'>Business</Item>
         <Item to='/food'>Food</Item>
         <Item to='/'>General</Item>
         <Item to='/science'>Science</Item>
         <Item to='/entertainment'>Entertainment</Item>
         <Item to='/tech'>Technology</Item>
         <Item to='/sport'>Sports</Item></>
  )
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left',backgroundColor:"#0d6efd", height:"100vh"}}> 
    <Typography variant='h5' color="white" m={1} textAlign='center' >Categories</Typography>
    <Divider sx={{ borderBottomWidth: 2, bgcolor:"white"}} />
      <Stack direction='column' spacing={1} m={1} textAlign='center'>
        {ItemEls}
         </Stack>
  
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;  

    return (
      // <div>
      //   <nav className="navbar fixed-top asset-1 navbar-expand-lg">
      //     <div className="container-fluid">
      //       <Link to='#' className="navbar-brand text-light">News grabber</Link>
      //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      //         <span className="navbar-toggler-icon"></span>
      //       </button>
      //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
      //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      //           <li className="nav-item"><Link to='/' className="nav-link text-light" aria-current="page">Home</Link></li>
      //           <li className="nav-item"><Link to='/business' className="nav-link text-light">Business</Link></li>
      //           <li className="nav-item"><Link to='/food' className="nav-link text-light">Food</Link></li>
      //           <li className="nav-item"><Link to='/' className="nav-link text-light">General</Link></li>
      //           <li className="nav-item"><Link to='/science' className="nav-link text-light">Science</Link></li>
      //           <li className="nav-item"><Link to='/entertainment' className="nav-link text-light">Entertainment</Link></li>
      //           <li className="nav-item"><Link to='/tech' className="nav-link text-light">Technology</Link></li>
      //           <li className="nav-item"><Link to='/sport' className="nav-link text-light">Sports</Link></li>
      //         </ul>
      //       </div>
      //     </div>
      //   </nav>
      // </div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 , display:{sx:'block', sm:'none'}}}
            onClick={handleDrawerToggle}
          >
            <MenuRounded/>
          </IconButton>
          <Typography component="a" href="/" variant="h5"  sx={{ fontWeight:'bold' , color:'inherit', textDecoration:'none'
              , "&:hover": {
               color:'inherit',
                cursor: "pointer"
                }}}> 
            Newsgrabber
          </Typography>
         <Stack direction='row' spacing={4} ml={4} sx={{display:{xs:'none', sm:'block'}}}>
         {ItemEls}
         </Stack>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    )
}

export default NavBar