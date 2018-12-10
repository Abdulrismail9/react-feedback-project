import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';




class PageFive extends Component {



    clickHandler = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <p>Thank You For Your Feedback!</p>
                <Button variant="contained" color="primary" onClick={this.clickHandler}>Next</Button>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(PageFive));
