export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';

export const loadCards = (cards) => {

  return function (dispatch){
    //GET method
    makeRequest('GET','/api/cards')
    .then(cards => {
      console.log(cards)
      dispatch({
        type: LOAD_CARDS,
        cards: cards
      })
      // .catch(function (err) {
      // console.error('Augh, there was an error!', err.statusText);
      // });
    })
  }
}



export const addCard =  (newCard) => {

  //POST method
  // return function (dispatch){
  //    var oReq = new XMLHttpRequest();
  //   // oReq.addEventListener("load", reqListener);
  //   oReq.open("POST", "/api/cards");
  //   oReq.send().then(newCard => {
  //     console.log(newCard);
  //     dispatch({
  //       type:ADD_CARD,
  //       newCard: newCard
  //     });
  //   })
  // }
}

function makeRequest (method, url, done) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function () {
    done(null, xhr.response);
  };
  xhr.onerror = function () {
    done(xhr.response);
  };
  xhr.send();
}

// // Example:

// makeRequest('GET', 'http://example.com')
// .then(function (datums) {
//   console.log(datums);
// })
// .catch(function (err) {
//   console.error('Augh, there was an error!', err.statusText);
// });

// And we'd call it as such:
// makeRequest({
//   method: 'GET',
//   url: 'http://example.com'
// })
// .then(function (datums) {
//   return makeRequest({
//     method: 'POST',
//     url: datums.url,
//     params: {
//       score: 9001
//     },
//     headers: {
//       'X-Subliminal-Message': 'Upvote-this-answer'
//     }
//   });
// })
// .catch(function (err) {
//   console.error('Augh, there was an error!', err.statusText);
// });




