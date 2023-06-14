import React from 'react';
import {Box, Stack, Typography} from '@mui/material';
import {Sidebar} from './index.js'

const Feed = () => {
  return (
    <Stack sx=
      {{ flexDirection : {xs: 'column', md: 'row'}, height: '96vh'}}>
      <Box sx={{ height: {xs: 'auto', md:'100vh'},
       borderRight: '1px solid #25282b', p: 2, overflowY:'auto'}}>
        <Sidebar />
      </Box>
    </Stack>
  )
}

export default Feed
