import React from 'react';
import { useEffect, useState } from 'react';
import {Box} from '@mui/material';
import { useParams } from 'react-router-dom';

import {ChannelCard, Videos} from '.'
import { fetchAPI } from '../utils/fetchAPI';


const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);
  const {id } = useParams();
  
  useEffect(()=>{
    fetchAPI(`channels?.part=snippet&id=${id}`)
    .then(data => setChannelDetail(data?.items[0]))

    fetchAPI(`search?.part=snippet&channelId=${id}&order=date`)
    .then(data => setVideos(data?.items))
    }, [id])
    

  return (
    <Box sx={{background:'#1b1d21', minHeight:'95vh'}}>
      <Box>
       <div style={{background: 'linear-gradient(90deg, rgba(58,239,246,1) 0%, rgba(164,62,247,1) 50%, rgba(248,68,214,1) 100%)',
        zIindex:10,
        height:'300px'}} />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box >
       <Videos videos={videos} justifyContent='center'/>
      </Box>
    </Box>
    
  )
}

export default ChannelDetail
