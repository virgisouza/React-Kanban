export const getCards = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/cards");
  oReq.send();
});


export const postCard = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("onSubmit", function (){
    console.log('postCard', JSON.parse(this.responseText))
    //push into db
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("POST", "http://localhost:4567/api/cards");
  oReq.send();
})

export const getPriorities = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "http://localhost:4567/api/priorities");
  oReq.send();
})

