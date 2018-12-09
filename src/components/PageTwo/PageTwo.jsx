import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';


class PageTwo extends Component {

    handleChangeFor = (event) => {
        this.setState({
            pageDos: event.target.value
        })
    }

// function to dispatch response to redux state
// also function to switch to next page
    clickHandler = () => {
        this.props.dispatch(
            { type: 'FEEDBACK_DOS', payload: this.state.pageDos });
        this.props.history.push('/pageThree');
    }

    render() {
        return (
            <div>
                <p>2 of 4 pages</p>
                <p>How well are you understanding the content?</p>
                <input onChange={this.handleChangeFor}></input>
                <button onClick={this.clickHandler}>Enter</button>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageTwo);
