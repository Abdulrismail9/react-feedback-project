import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageTwo extends Component {


    clickHandler = () => {
        this.props.history.push('/pageOne');
    }

    render() {
        return (
            <div>
                <p>Any comments?</p>
                <input></input>
                <button onClick={this.clickHandler}>Next</button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageTwo);
