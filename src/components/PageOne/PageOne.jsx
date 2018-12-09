import React, { Component } from 'react';
import { connect } from 'react-redux';



class PageOne extends Component {

  handleChangeFor = (event) => {
    this.setState({
      pageUno: event.target.value
    })
  }
 
 clickHandler = () => {
   this.props.dispatch(
     {type:'FEEDBACK_UNO', payload: this.state.pageUno} );
  this.props.history.push('/pageTwo');

 }

  render() {
       return (
      <div>
        <p>How are you feeling today?</p>
        <input onChange={this.handleChangeFor}></input>
        <button onClick={this.clickHandler}>Next</button>

   
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(PageOne);
