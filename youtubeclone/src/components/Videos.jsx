import React from 'react';
import fetchAPI from './fetchAPI';
import { Stack, Box , Typography} from '@mui/material';

const Videos = ({selectedCategory}) => {
  return (
    <Stack direction='row'
     justifyContent='start' 
     alignItems='center' 
     sx={{flexDirection: 'row', flexWrap:'wrap'}}>
      <Typography variant='h6'>
        {selectedCategory} <span style={{color: 'red' }}>Videos</span>
      </Typography>
    </Stack>
  )
}

export default Videos
