import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import PageOne from '../PageOne/PageOne.jsx';
import PageTwo from '../PageTwo/PageTwo.jsx';
import PageThree from '../PageThree/PageThree.jsx';
import PageFour from '../PageFour/PageFour.jsx';
import { HashRouter as Router, Route } from "react-router-dom";
import PageFive from '../PageFive/PageFive';

class App extends Component {

  render() {

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
        <Route path="/pageFive" exact component={PageFive} />

        </div>
      
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxStore) => ({
  reduxStore
})

export default connect(mapReduxStateToProps)(App);
