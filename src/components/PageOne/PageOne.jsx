import React, { Component } from 'react';
import { connect } from 'react-redux';
import Review from '../Review/Review.jsx';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';




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
        <Button variant="contained" color="primary" onClick={this.clickHandler}>Enter</Button>
        <Review />
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default withRouter(connect(mapReduxStateToProps)(PageOne));
