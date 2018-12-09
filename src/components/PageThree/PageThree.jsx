import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageThree extends Component {

    handleChangeFor = (event) => {
        this.setState({
          pageTres: event.target.value
        })
      }

    clickHandler = () => {
        this.props.dispatch(
            {type:'FEEDBACK_TRES', payload: this.state.pageTres} );
        this.props.history.push('/pageFour');
    }


    render() {
        return (
            <div>
                <p>How well are you being supported?</p>
                <input onChange={this.handleChangeFor}></input>
                <button onClick={this.clickHandler}>Next</button>

            </div>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapReduxStateToProps)(PageThree);
