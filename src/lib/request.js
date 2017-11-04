export const getCards = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});


export const postCard = (card) => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    console.log('postCard', JSON.parse(this.responseText));
    resolve(JSON.parse(this.responseText));
  });
  oReq.open("POST", "http://localhost:4567/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(card);
})

export const getPriorities = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/priorities");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getUsers = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/users");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

