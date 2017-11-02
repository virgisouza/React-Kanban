import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './index.css';
import { loadCards } from '../actions/cards';
import NewCardForm from '../containers/NewCardForm/index';
import CardList from '../containers/CardList';

class App extends Component {
  constructor(){
   super();

  //   //state initialized here
  }


  componentWillMount(){

  }

  componentDidMount(){
    this.props.loadCards();
  }

  render() {
    return (
      <div className="App">
        <NewCardForm quote='add a task'/>
        <CardList cards={this.props.cards}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return{
    cards: state.cardList
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    loadCards: () => {
      dispatch(loadCards())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


export default ConnectedApp;
