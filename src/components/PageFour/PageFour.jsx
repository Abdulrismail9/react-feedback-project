import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';
import axios from 'axios';


class PageTwo extends Component {

    handleChangeFor = (event) => {
        this.setState({
            pageQuatro: event.target.value
        })
    }

// function to dispatch response to redux state
// also function to switch to next page
    clickHandler = () => {
        this.props.dispatch(
            { type: 'FEEDBACK_QUATRO', payload: this.state.pageQuatro });
    }

    addResponsesToDb = () => {
        console.log('in addResponsesToDb')
        let body = this.props.reduxStore.feedbackList;
        console.log('body', body);
        axios.post('/api/feedback', body).then(response => {
            console.log('response',response);
        }).catch(error => {
            console.log('error',error);
        })
    }

    clickHandlerDos = () => {
        this.addResponsesToDb();
        this.props.history.push('/pageFive');
    }


    render() {
        return (
            <div>
                <p>4 of 4 pages</p>
                <p>Any comments?</p>
                <input onChange={this.handleChangeFor}></input>
                <button onClick={this.clickHandler}>Enter</button>
                <button onClick={this.clickHandlerDos}>Submit</button>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageTwo);
