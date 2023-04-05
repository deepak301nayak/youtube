import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Box} from '@mui/material'
import {NavBar, Feed, SearchFeed, VideoDetails, ChannelDetails} from './components'

const App =() => (
    <BrowserRouter>
    <Box sx={{backgroundColor:'#000'}}>
        <NavBar/>
        <Routes>
            <Route path="/" exact element={ <Feed />} />
            <Route path="/video/:id" exact element={ <VideoDetails />} />
            <Route path="/channel/:id" exact element={ <ChannelDetails />} />
            <Route path="/search/:searchTerm" exact element={ <SearchFeed />} />
        </Routes>
    </Box>
    </BrowserRouter>
)


export default App