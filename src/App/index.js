import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../actions/users';
import { loadPriorities } from '../actions/priorities';
import { loadCards, addCard } from '../actions/cards';
import NewCardForm from '../containers/NewCardForm/index';
import CardList from '../containers/CardList';
import Columns from '../components/Columns';

class App extends Component {
  // eslint-disable-next-line
  constructor(){
   super();


  }


  componentWillMount(){

  }

  componentDidMount(){
    this.props.loadCards();
    this.props.addCard();
    this.props.loadPriorities();
    this.props.loadUsers();
  }

  render() {
    return (
      <div className="App">
        <NewCardForm/>
        <Columns/>
        <CardList cards={this.props.cards}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps',state);
  return {
    cards: state.cardList,
    card: state.cardList,
    priorities: state.prioritiesList,
    users: state.usersList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards())
    },
    addCard: () => {
      dispatch(addCard())
    },
    loadPriorities: () => {
      dispatch(loadPriorities())
    },
    loadUsers: () => {
      dispatch(loadUsers())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


export default ConnectedApp;


