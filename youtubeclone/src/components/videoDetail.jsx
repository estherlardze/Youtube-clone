import React , {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player'
import {Box, Typography, Stack} from '@mui/material';

import { fetchAPI } from '../utils/fetchAPI';
import { CheckCircle } from '@mui/icons-material';
import {Videos} from './'
  
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);


  useEffect(() =>{
  fetchAPI(`videos?.part=snippet, statistics&id=${id}`)
    .then(data => setVideoDetail(data.items[0]))

  fetchAPI(`search?relatedToVideoId=${id}&part=snippet&type=video`)
  .then(data => setVideos(data.items))
   },[id])

   if(!videoDetail) return "Loading...";

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'column', lg:'row'}}> 

         <Box flex={2}>

           <Box position="sticky" top="90px" width="100%">
             <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player"/>
              <Typography variant="h5" color='#fff' margin={2}>
                {videoDetail.snippet.title}
               </Typography>

               <Stack direction="row" justifyContent="space-between">
                <Link to={`/channel?.${videoDetail.snippet.channelId}`}> 
                 <Typography variant='subtitle2' color='#fff' margin={1} fontWeight={500}>
                   {videoDetail.snippet.channelTitle}
                   <CheckCircle sx={{fontSize:'16px', color:'grey', marginLeft:"5px"}}/>   
                 </Typography>   
                 </Link
                 <Stack direction='row' marginRight="20px">
                   <Typography color='#fff' variant='subtitle2' mr={2}>
                    {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
                   </Typography>
                   <Typography color='#fff' variant='subtitle2'>
                    {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
                   </Typography>
                 </Stack>

               </Stack>
            </Box>
         </Box>

         <Box alignItems='center' justifyContent='flex-end' px={{xs:'28px', md:"10px"}} flex={1} py={2}>
            <Videos videos={videos}/>
        </Box>

      </Stack>
    </Box>
  )
}

export default VideoDetail
