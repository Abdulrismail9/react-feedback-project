import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageFive extends Component {



    clickHandler = () => {
     
    }

    render() {
        return (
            <div>
                <p>Thank You For Your Feedback!</p>
                <button onClick={this.clickHandler}>Next</button>
              
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageFive);
