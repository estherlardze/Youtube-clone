import React, {useEffect, useState} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import { Videos} from './index.js';
import { fetchAPI } from '../utils/fetchAPI.js';
import { useParams } from 'react-router-dom';


const SearchFeed = () => {
  const [videos, setVideos] = useState(null)
  const {searchTerm} = useParams()
  

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection : {xs: 'column', md: 'row'},
           height: '95vh', background: '#1b1d21'}}>

      <Box sx={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', minHeight: '92vh', overflowY:'auto'}}>
        <Typography variant='h4'
           sx={{color: '#fff',
           marginBottom: '20px',
           marginLeft: '10px'}}>

           Search results for:  <span style={{color: 'red', fontWeight: '500'}}>{searchTerm}</span> Videos
        </Typography>
        <Box>
        {<Videos videos = {videos}/>}
        </Box>
      </Box>
    </Stack>
  )
}

export default SearchFeed

