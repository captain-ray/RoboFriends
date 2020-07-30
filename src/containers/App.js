import React, { Component } from "react";
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../store/actions';

import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundary';

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        const { robots, searchField, onSearchChange, isPending } = this.props;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))


        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    {isPending ? <h1>Loading...</h1> :
                        <ErrorBoundry>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundry>
                    }
                </Scroll>
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);