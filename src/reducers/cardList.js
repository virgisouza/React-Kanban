import {LOAD_CARDS, ADD_CARD, LOAD_PRIORITIES} from '../actions/cards';

const initialState = [];

const cardList = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD :
      return [...state, action.newCard];
    case LOAD_PRIORITIES:
      return [...action.priorities];
    default:
      return state;
  }
}

export default cardList;
