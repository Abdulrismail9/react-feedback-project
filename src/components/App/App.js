import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import PageOne from '../PageOne/PageOne.jsx';
import PageTwo from '../PageTwo/PageTwo.jsx';
import PageThree from '../PageThree/PageThree.jsx';
import PageFour from '../PageFour/PageFour.jsx';
import { HashRouter as Router, Route } from "react-router-dom";

class App extends Component {

  getFeedback = () => {
    console.log('in getFeedback');
    axios.get('/api/feedback').then( response => {
      console.log('checking', response);
        this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data})
   
      });
  }
  componentDidMount () {
    this.getFeedback();
  }



  render() {
    let feedbackItems;
      feedbackItems = this.props.reduxStore.feedbackList.map((items, i) => {
        return ( <div key={items.id}>
        <div>your feedback</div>
          <p></p>
        <div>Feelings: {items.feeling}</div>
        <div>Understanding: {items.understanding}</div>
        <div>Support: {items.support}</div>
        <div>Comments: {items.comments}</div>
    </div>
      )})
      console.log(this.props.reduxStore.feedbackList);

    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
        </header>
        <Route path="/" exact component={PageOne} />
        <Route path="/pageTwo" exact component={PageTwo} />
        <Route path="/pageThree" exact component={PageThree} />
        <Route path="/pageFour" exact component={PageFour} />
        
          {feedbackItems}
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(App);
