import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, videoDetail,channelDetail, searchFeed } from './components/index.js'

const App = () => (
   <BrowserRouter>
   <Box sx={{backgroundColor: "#000"}}>
     <Navbar />
     <Routes>
        <Route path="/" exact element={<Feed />} />
        <Route path="/Video/:id"  element={<videoDetail />} />
        <Route path="/channel/:id" exact element={<channelDetail />} />
        <Route path="/search/:search" exact element={<searchFeed />} />
     </Routes>
     </Box>
   </BrowserRouter>

)

export default App
