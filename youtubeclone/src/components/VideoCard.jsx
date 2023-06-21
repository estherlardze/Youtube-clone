import React from 'react';
import {Card, CardContent, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {CheckCircle} from '@mui/icons-material'

import { demoChannelTitle, demoProfilePicture, demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl } from '../utils/constants';
const VideoCard = ({video: {id: {videoId}, snippet}}) => {

  return (
    <Card sx={{width: {md: '320px', xs: '100%'}}}>
      <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <CardMedia 
         image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
         alt={snippet?.title}
         sx={{width:'350px', height: '180px'}}/>
      </Link>

      <CardContent 
       sx={{height: 100, background: '#e3e3e3'}}>
        <Link to={videoId ? `video/${videoId}` : demoVideoUrl}>
         <Typography variant="subtitle1"
          sx={{fontWeight:700, width:'320px'}} >
            {snippet?.title.slice(0, 60) || demoVideoTitle}
         </Typography>
        </Link>
        <Link to={videoId ? `channel/${videoId}`: demoChannelUrl}>
           <Typography variant="subtitle2">
             {snippet?.channelTitle || demoChannelTitle}
             <CheckCircle sx={{color: 'gray', ml: "5px", fontSize:"12px"}}/>
           </Typography>   
        </Link>
       </CardContent>

    </Card>
  )
}

export default VideoCard