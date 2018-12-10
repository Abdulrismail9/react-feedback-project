import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



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
// this function makes the axios call to the server to push the responses to the DB
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
                <Button variant="contained" color="primary" onClick={this.clickHandler}>Enter</Button>
                <Button variant="contained" onClick={this.clickHandlerDos}>Submit</Button>
                <Review />
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(PageTwo));
