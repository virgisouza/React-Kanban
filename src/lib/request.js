export const getCards = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("GET", "/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
});

export const postCard = (card) => new Promise((resolve, reject) => {
  let data = JSON.stringify(card);
  var oReq = new XMLHttpRequest();
  oReq.onreadystatechange = function (){
    if(oReq.readyState === XMLHttpRequest.DONE && oReq.status === 200) {
      var response = JSON.parse(this.response);
      resolve(response);
    }
  };
  oReq.open("POST", "/api/cards");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send(data);
})

export const getPriorities = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "/api/priorities");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getUsers = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.responseText))
  });
  oReq.open("GET", "/api/users");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})

export const getStatus = () => new Promise((resolve, reject) => {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", function (){
    resolve(JSON.parse(this.response))
  });
  oReq.open("GET", "/api/statuses");
  oReq.setRequestHeader('content-type', 'application/json');
  oReq.send();
})
