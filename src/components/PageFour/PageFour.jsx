import React, { Component } from 'react';
import { connect } from 'react-redux';


class PageTwo extends Component {

    handleChangeFor = (event) => {
        this.setState({
          pageQuatro: event.target.value
        })
      }


    clickHandler = () => {
        this.props.dispatch(
            {type:'FEEDBACK_QUATRO', payload: this.state.pageQuatro} );
        this.props.history.push('/pageOne');
    }

    render() {
        return (
            <div>
                <p>Any comments?</p>
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
