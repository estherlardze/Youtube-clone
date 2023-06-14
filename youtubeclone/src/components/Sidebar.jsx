import React from 'react';
import {Stack, Typography, IconButton, Button} from '@mui/material';
import {categories} from '../utils/constants'

const selectedItem = 'New'
const Sidebar = () => {
  return (
    <Stack sx={{display: 'flex', flexDirection :{sm:'row', md: 'column'}, color: '#fff', height: '100vh', backgroungColor: '#000'}}>
       {categories.map((item) =>(
          <button key={item.name} className='category-btn'>
             <span 
               style={{padding: '7px', color: 'red'}} >
               {item.icon}
              </span>
             <span>{item.name}</span>
          </button >
       ))}
        <Typography variant='body2' className='copyright'>
          Copyright @ 2023
        </Typography>
    </Stack>
  )
}

export default Sidebar
