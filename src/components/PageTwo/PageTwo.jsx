import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



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
                <Button  variant="contained" color="primary" onClick={this.clickHandler}>Enter</Button>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(PageTwo));
