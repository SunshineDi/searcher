import React, { Component } from 'react';
import Cardlist from './Cardlist';
import SearchBox from './SearchBox';
import { robots } from './robots';
import './App.css';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
// always need to wrap in div is returning more than one thing
class App extends Component {
    constructor () {
        super()
        this.state = {
            robots: robots,
            searchfield: '' 
        }
    }
    // Event Handler -- triggered on input into search box
    // setting the searchfield to the value of the event
    // setting the state of the search
    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }
    render(){
        // here is the actual fitering of the robots
        // we got the search state from above and and we are
        // filtering ther
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className ='tc'> 
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <Cardlist robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll> 
            </div>
        );
    }
}

export default App;
