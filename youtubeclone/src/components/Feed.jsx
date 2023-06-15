import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {Sidebar, Videos} from './index.js';
import { fetchAPI } from './fetchAPI.jsx';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')

  useEffect(() =>{
    fetchAPI(`/search?part=snippet&q=${selectedCategory}`)
    .then((data, index) =>{
      return data.items
    })

  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection : {xs: 'column', md: 'row'}, height: '100vh'}}>
      <Box sx={{ height: {xs: 'auto', md:'95vh'},
       borderRight: '1px solid #25282b', p: 2, overflowY:'auto'}}>
        <Sidebar />
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: '92vh'}}>
         <Videos />
      </Box>
    </Stack>
  )
}

export default Feed
