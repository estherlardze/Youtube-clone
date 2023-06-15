import React from 'react';
import {Stack, Typography, IconButton, Button} from '@mui/material';
import {categories} from '../utils/constants'

const Sidebar = ({selectedCategory}) => {
  return (
    <Stack sx={{display: 'flex', flexDirection :{xs:'row', md: 'column'}, color: '#fff', height: {xs: 'auto', md:'95vh'}, backgroungColor: '#000'}}>
       {categories.map((item) =>(
          <button key={item.name} 
           className='category-btn' 
           style={{background: item.name === selectedCategory && 'red'}}>
             <span 
               style={{padding: '7px', color: item.name === selectedCategory ? '#fff' : 'red'}} >
               {item.icon}
              </span>
             <span>{item.name}</span>
          </button >
       ))}
        <Typography variant='body2' className='copyright'>
          Copyright @Larticode 2023
        </Typography>
    </Stack>
  )
}

export default Sidebar
