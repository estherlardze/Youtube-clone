import {logo } from '../utils/constants';
import { Stack, Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Navbar = () =>  {

   return(
    <Stack direction = "row"
         alignItems = "center"
         sx={{position: 'sticky', top: 0, background: '#1b1d21', justifyContent: 'space-between', padding: 2}}
         >
       <Link to='/'>
       <img src={logo} alt="logo" style={{height: 45}}/>
       </Link>

       <Paper elevation={3} component='form'
          onSubmit={()=>{}}
          sx={{border: 'none', borderRadius: 20, pl:2}} >
          <input type="text"
           placeholder='search...'
           className='search-bar'
           value=""
           onChange={()=>{}}/>

          <IconButton>
            <SearchIcon sx={{color: 'red'}}/>
          </IconButton>
      </Paper>
    </Stack>
  )
   }

export default Navbar
