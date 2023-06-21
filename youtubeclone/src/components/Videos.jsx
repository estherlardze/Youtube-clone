import React from 'react';
import { Stack, Box} from '@mui/material';
import {VideoCard, ChannelCard} from './index'

const Videos = ({videos}) => {
  console.log(videos)
  return (
    <Stack direction='row' flexDirection= 'row' flexWrap='wrap' gap={2}
    sx={{marginLeft:{xs:'5px', md:'10px'}}}>
      
      {videos.map((video, index) =>(
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video}/>}
          {/* {video.id.channelId && <ChannelCard video={video}/>} */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos
