import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, videoDetail,channelDetail, searchFeed } from './components/index.js'

const App = () => (
   <BrowserRouter>
   <Box sx={{backgroundColor: "#fff"}}>
     <Navbar />
     <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/VideoDetail/"  element={<videoDetail />} />
        <Route path="/channelDetail" exact element={<channelDetail />} />
        <Route path="/searchFeed" exact element={<searchFeed />} />
     </Routes>
     </Box>
   </BrowserRouter>

)

export default App
