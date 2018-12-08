import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageThree extends Component {

    clickHandler = () => {
        this.props.history.push('/pageFour');
    }


    render() {
        return (
            <div>
                <p>How well are you being supported?</p>
                <input></input>
                <button onClick={this.clickHandler}>Next</button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageThree);
