import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';



class PageOne extends Component {

  handleChangeFor = (event) => {
    this.setState({
      pageUno: event.target.value
    })
  }

// function to dispatch response to redux state
// also function to switch to next page
  clickHandler = () => {
    this.props.dispatch(
      { type: 'FEEDBACK_UNO', payload: this.state.pageUno });
    this.props.history.push('/pageTwo');

  }

  render() {
    return (
      <div>
        <p>1 of 4 pages</p>
        <p>How are you feeling today?</p>
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

export default connect(mapReduxStateToProps)(PageOne);
