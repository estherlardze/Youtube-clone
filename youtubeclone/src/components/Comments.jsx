import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

const Comments = ({comment:{snippet: {topLevelComment: {snippet}}}}) => {
    
   let date = new Date(snippet?.publishedAt)

    console.log(snippet?.authorDisplayNamenippet)
  return (
    <Stack direction="row"  marginBottom= "30px" >
      <img src={snippet?.authorProfileImageUrl} alt="profile" 
       style={{borderRadius:"50%"}}  width="50px" height="50px"/>
      <Box marginLeft="20px" color="#fff" >
         <Typography variant="body2" marginBottom="5px">{snippet?.authorDisplayName.toLowerCase()} <span style={{paddingLeft:"10px"}}>{date.toDateString()}</span></Typography>
         <Typography variant="body2">{snippet?.textDisplay}</Typography>
      </Box>
    </Stack>
  )
}

export default Comments
