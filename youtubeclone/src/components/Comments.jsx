import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const Comments = ({comment:{snippet: {topLevelComment: {snippet}}}}) => {

    console.log(snippet?.authorDisplayNamenippet)
  return (
    <Stack direction="row">
      <img src={snippet?.authorProfileImageUrl} alt="" 
       style={{borderRadius:"50%"}}/>
      <Box>
         <Typography>{snippet?.authorDisplayNamenippet}</Typography>
      </Box>
    </Stack>
  )
}

export default Comments
