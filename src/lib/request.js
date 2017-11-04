export const getCards = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});


export const postCard = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("onSubmit", function (){
    let data = JSON.parse(this.responseText);
    console.log('postCard', data);
    //push into db
    resolve(data);
  });
  oReq.open("POST", "http://localhost:4567/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
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

