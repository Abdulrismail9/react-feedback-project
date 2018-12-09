import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';


class PageThree extends Component {

    handleChangeFor = (event) => {
        this.setState({
            pageTres: event.target.value
        })
    }

// function to dispatch response to redux state
// also function to switch to next page
    clickHandler = () => {
        this.props.dispatch(
            { type: 'FEEDBACK_TRES', payload: this.state.pageTres });
        this.props.history.push('/pageFour');
    }


    render() {
        return (
            <div>
                <p>3 of 4 pages</p>
                <p>How well are you being supported?</p>
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

export default connect(mapReduxStateToProps)(PageThree);
