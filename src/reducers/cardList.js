import {LOAD_CARDS, ADD_CARD} from '../actions/cards';

const initialState = [];

const cardList = (state = initialState, action) => {
  switch(action.type){
    case LOAD_CARDS:
      return [...action.cards];
    case ADD_CARD :
      return [...state, action.newCard];
    default:
      return state;
  }
}

export default cardList;
