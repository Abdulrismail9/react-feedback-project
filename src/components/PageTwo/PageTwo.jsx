import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageTwo extends Component {

    handleChangeFor = (event) => {
        this.setState({
          pageDos: event.target.value
        })
      }
 
    clickHandler = () => {
        this.props.dispatch(
            {type:'FEEDBACK_DOS', payload: this.state.pageDos} );
        this.props.history.push('/pageThree');
       }

  render() {
       return (
      <div>
        <p>How well are you understanding the content?</p>
        <input onChange={this.handleChangeFor}></input>
        <button onClick={this.clickHandler}>Next</button>
   
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(PageTwo);
