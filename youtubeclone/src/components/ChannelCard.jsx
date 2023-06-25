import React from 'react';
import { demoProfilePicture } from '../utils/constants';
import {CardContent, CardMedia, Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import {CheckCircle} from '@mui/icons-material'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box sx={{display: 'flex',
           alignItems: 'center', 
           justifyContent:'center', 
           flexDirection: 'column', 
           width: {xs: '100%', md: '320px'}, 
           margin:'auto',
           marginTop}} >

       <Link to={ `/channel/${channelDetail?.id?.channelId}` }>
        <CardContent>
        <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.channelTitle}
          sx={{width:'180px', height: '180px', borderRadius: '50%'}}
          />
          <Typography color='#fff' marginTop={2} >
            {channelDetail?.snippet?.channelTitle}
            <CheckCircle fontSize='14px' sx={{color:'gray', marginLeft:'10px'}}/>
          </Typography>
          
            {channelDetail?.statistics?.subscriberscount && (
              <Typography>
                {parseInt(channelDetail?.statistics?.subscriberscount).toLocaleString()} Subscribers
              </Typography>
            )}
           
        </CardContent>
       </Link>
    </Box>
  )
}

export default ChannelCard
