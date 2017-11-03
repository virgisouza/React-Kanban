import { getCards, postCard, getPriorities } from '../lib/request';
export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const LOAD_PRIORITIES = 'LOAD_PRIORITIES';


export const loadCards = () => {

  return function (dispatch){
    //GET method
    return getCards().then(cards => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      })
    })
  }
}

export const addCard =  () => {

  return function (dispatch){
      //POST method
     return postCard().then(newCard => {
      console.log(newCard);
      dispatch({
        type:ADD_CARD,
        newCard: newCard
      });
    })
  }
}

export const loadPriorities = () => {

  return function (dispatch){
    return getPriorities().then(priorities => {
      console.log('action priorities', priorities);
      dispatch({
        type: LOAD_PRIORITIES,
        priorities: priorities
      })
    })
  }
}

