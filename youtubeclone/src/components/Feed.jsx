import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {Sidebar, Videos} from './index.js';
import { fetchAPI } from '../utils/fetchAPI.js';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection : {xs: 'column', md: 'row'}, height: '95vh', background: '#1b1d21'}}>
      <Box sx={{ height: {xs: 'auto', md:'95vh'},
       borderRight: '1px solid #25282b', p: 2, overflowY:'auto', width:{xs:'auto', md:'100%'}}}>
        <Sidebar 
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
        />
      </Box>

      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', minHeight: '92vh', overflowY:'auto'}}>
        <Typography variant='h4' sx={{color: '#fff', marginR: '10px'}}>
         {selectedCategory} <span style={{color: 'red', fontWeight: '500'}}>Videos</span>
        </Typography>
         <Videos videos = {videos}/>
      </Box>
    </Stack>
  )
}

export default Feed
