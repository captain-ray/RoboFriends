import React, { Component } from "react";
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robot';


class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchText: "",
        }
    }

    onSearchChange = (event) => {
        this.setState({
            searchText: event.target.value
        })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => robot.name.toLowerCase().includes(this.state.searchText.toLowerCase()))

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchText={this.state.searchText} searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        )
    }
}

export default App;