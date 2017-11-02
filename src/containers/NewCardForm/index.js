import React , { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cards';

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titleInput: ''
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({
      titleInput: ''
    })
  }


  handleChangeTitle(event){
    event.preventDefault();
    this.setState({
      titleInput: event.target.value
    });
  }

  render(){

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='New Task' value={this.state.titleInput} onChange={this.handleChangeTitle.bind(this)}/>
          <select name="priority">
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
            <option value="4">Blocker</option>
          </select>
          <select name="assignedTo">
            <option value="1">User One</option>
          </select>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card) => {
      dispatch(addCard(card))
    }
  }
}

const ConnectNewCardForm = connect(
  null,
  mapDispatchToProps
)(NewCardForm)


export default ConnectNewCardForm;


