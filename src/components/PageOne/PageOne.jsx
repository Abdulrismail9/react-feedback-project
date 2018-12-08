import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageOne extends Component {

 
 clickHandler = () => {
  this.props.history.push('/pageTwo');
 }

  render() {
       return (
      <div>
        <p>How are you feeling today?</p>
        <input></input>
        <button onClick={this.clickHandler}>Next</button>

   
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(PageOne);
