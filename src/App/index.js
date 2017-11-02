import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import './index.css';

class App extends Component {
  constructor(){
    super();

    //state initialized here
  }


  componentWillMount(){

  }

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        Hello World
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return{

  }
}

const mapDispatchToProps = (dispatch) => {

  return {

  }
}

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)


export default ConnectedApp;
