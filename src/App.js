import React, { Component } from 'react'; 
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios'
import VideoDetail from './components/VideoDetail/VideoDetail'
import VideoList from './components/VideoList'
import MosaiqueMovies from './components/MosaiqueMovies';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
        videos: [],
        selectedVideo: null
        }
    }

    handleSubmit = async (valueFromSearchBar) => {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                 q: valueFromSearchBar,
                 part: 'snippet',
                 key : 'AIzaSyAFUNYmE1gfydRFrlb3Q05gXlPSgQmiY6I',
                 maxResults: 3

            }
         })
        this.setState({
            videos: response.data.items
        })
    };

    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
          <div>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div>
                    <div>
                        <div>
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div>
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                        <div>
                            <MosaiqueMovies />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App