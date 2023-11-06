import React from 'react';
import { Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard} from './index'
import {CircularWithValueLabel} from './Loader'


const Videos = ({videos, justifyContent}) => {
  if(!videos?.length) return <CircularWithValueLabel/>;

  return (
    <Stack direction='row' 
        alignItems='center'
        flexDirection= 'row'
        flexWrap='wrap'
        gap={2}
        sx={{marginLeft:{xs:'5px', md:'10px'},
        justifyContent,
        marginTop:"20px"}}>
      
      {videos.map((video, index) =>(
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video}/>}
          {video.id.channelId && <ChannelCard channelDetail={video}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
