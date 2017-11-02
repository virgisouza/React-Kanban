export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = (cards) => {

  return function (dispatch){
    //GET method
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "/api/cards");
    oReq.send().then( cards => {
      console.log(cards)
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      });
      console.log(cards);
      return cards;
    });
  }
};

export const addCard =  (newCard) => {

  //POST method
  return function (dispatch){
     var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("POST", "/api/cards");
    oReq.send().then(newCard => {
      console.log(newCard);
      dispatch({
        type:ADD_CARD,
        newCard: newCard
      });
    })
  }
}




