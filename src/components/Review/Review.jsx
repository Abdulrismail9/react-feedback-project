import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './Review.css';

// this component will update the results for each response 
class Review extends Component {

    render() {
        return (
            <div className="results">
                <p>Feeling: {this.props.reduxStore.feedbackList.pageUno}</p>
                <p>Understanding: {this.props.reduxStore.feedbackList.pageDos}</p>
                <p>Support: {this.props.reduxStore.feedbackList.pageTres}</p>
                <p>Comments: {this.props.reduxStore.feedbackList.pageQuatro}</p>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(Review));
