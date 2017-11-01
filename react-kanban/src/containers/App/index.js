import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
import { loadCards } from '../../actions/cards';

class App extends Component {
  constructor(){
    super();
  }

  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <NewCardItem/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {

  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadCards: (cards) => {
      dispatch(loadCards(cards))
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps

  )(App)

export default ConnectedApp;
