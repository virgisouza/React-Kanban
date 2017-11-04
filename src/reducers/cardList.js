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

//here is where you can slice data to find, edit and delete specific card

export default cardList;
