import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadStatus } from '../actions/status';
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
    this.props.loadStatus();
  }

  render() {
    return (
      <div className="App">
        <NewCardForm/>
        <Columns/>
        <CardList cards={this.props.cards} columnStatus='Queue'/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardList,
    card: state.cardList,
    priorities: state.prioritiesList,
    users: state.usersList,
    statuses: state.statusList
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
    },
    loadStatus: () => {
      dispatch(loadStatus())
    }
  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


export default ConnectedApp;


//next steps:
// 1. filter cards by status and push into columns [Queue, Progress, Done]
// 2. Use Select component for all drop down lists in new card form and EDIT
// 3. Add Edit / Put functionality to each card
// 4. add delete to each card
// 5. stretch: drag and drop
// 7. Add routes


