import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state ={
            value = 'No entry for the moment'
        }
    }
    handleChange = (event) => {
        this.setState({ 
            value : event.target.value
        })
    }
    handleSubmit = (event) => {
        this.props.handleFormSubmit(this.state.value)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="searchVideo">
                            Search your video
                        </label>
                        <input onChange={this.handleChange} name ="searchVideo" id="searchVideo" type="text" value={this.state.value}/>
                    </div>

                </form>
            </div>
        )
    }
}
export default SearchBar;
